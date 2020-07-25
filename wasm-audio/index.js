(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
}((function () { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
    const directives = new WeakMap();
    /**
     * Brands a function as a directive factory function so that lit-html will call
     * the function during template rendering, rather than passing as a value.
     *
     * A _directive_ is a function that takes a Part as an argument. It has the
     * signature: `(part: Part) => void`.
     *
     * A directive _factory_ is a function that takes arguments for data and
     * configuration and returns a directive. Users of directive usually refer to
     * the directive factory as the directive. For example, "The repeat directive".
     *
     * Usually a template author will invoke a directive factory in their template
     * with relevant arguments, which will then return a directive function.
     *
     * Here's an example of using the `repeat()` directive factory that takes an
     * array and a function to render an item:
     *
     * ```js
     * html`<ul><${repeat(items, (item) => html`<li>${item}</li>`)}</ul>`
     * ```
     *
     * When `repeat` is invoked, it returns a directive function that closes over
     * `items` and the template function. When the outer template is rendered, the
     * return directive function is called with the Part for the expression.
     * `repeat` then performs it's custom logic to render multiple items.
     *
     * @param f The directive factory function. Must be a function that returns a
     * function of the signature `(part: Part) => void`. The returned function will
     * be called with the part object.
     *
     * @example
     *
     * import {directive, html} from 'lit-html';
     *
     * const immutable = directive((v) => (part) => {
     *   if (part.value !== v) {
     *     part.setValue(v)
     *   }
     * });
     */
    const directive = (f) => ((...args) => {
        const d = f(...args);
        directives.set(d, true);
        return d;
    });
    const isDirective = (o) => {
        return typeof o === 'function' && directives.has(o);
    };

    /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
    /**
     * True if the custom elements polyfill is in use.
     */
    const isCEPolyfill = window.customElements !== undefined &&
        window.customElements.polyfillWrapFlushCallback !==
            undefined;
    /**
     * Removes nodes, starting from `start` (inclusive) to `end` (exclusive), from
     * `container`.
     */
    const removeNodes = (container, start, end = null) => {
        while (start !== end) {
            const n = start.nextSibling;
            container.removeChild(start);
            start = n;
        }
    };

    /**
     * @license
     * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
    /**
     * A sentinel value that signals that a value was handled by a directive and
     * should not be written to the DOM.
     */
    const noChange = {};
    /**
     * A sentinel value that signals a NodePart to fully clear its content.
     */
    const nothing = {};

    /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
    /**
     * An expression marker with embedded unique key to avoid collision with
     * possible text in templates.
     */
    const marker = `{{lit-${String(Math.random()).slice(2)}}}`;
    /**
     * An expression marker used text-positions, multi-binding attributes, and
     * attributes with markup-like text values.
     */
    const nodeMarker = `<!--${marker}-->`;
    const markerRegex = new RegExp(`${marker}|${nodeMarker}`);
    /**
     * Suffix appended to all bound attribute names.
     */
    const boundAttributeSuffix = '$lit$';
    /**
     * An updateable Template that tracks the location of dynamic parts.
     */
    class Template {
        constructor(result, element) {
            this.parts = [];
            this.element = element;
            const nodesToRemove = [];
            const stack = [];
            // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null
            const walker = document.createTreeWalker(element.content, 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */, null, false);
            // Keeps track of the last index associated with a part. We try to delete
            // unnecessary nodes, but we never want to associate two different parts
            // to the same index. They must have a constant node between.
            let lastPartIndex = 0;
            let index = -1;
            let partIndex = 0;
            const { strings, values: { length } } = result;
            while (partIndex < length) {
                const node = walker.nextNode();
                if (node === null) {
                    // We've exhausted the content inside a nested template element.
                    // Because we still have parts (the outer for-loop), we know:
                    // - There is a template in the stack
                    // - The walker will find a nextNode outside the template
                    walker.currentNode = stack.pop();
                    continue;
                }
                index++;
                if (node.nodeType === 1 /* Node.ELEMENT_NODE */) {
                    if (node.hasAttributes()) {
                        const attributes = node.attributes;
                        const { length } = attributes;
                        // Per
                        // https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
                        // attributes are not guaranteed to be returned in document order.
                        // In particular, Edge/IE can return them out of order, so we cannot
                        // assume a correspondence between part index and attribute index.
                        let count = 0;
                        for (let i = 0; i < length; i++) {
                            if (endsWith(attributes[i].name, boundAttributeSuffix)) {
                                count++;
                            }
                        }
                        while (count-- > 0) {
                            // Get the template literal section leading up to the first
                            // expression in this attribute
                            const stringForPart = strings[partIndex];
                            // Find the attribute name
                            const name = lastAttributeNameRegex.exec(stringForPart)[2];
                            // Find the corresponding attribute
                            // All bound attributes have had a suffix added in
                            // TemplateResult#getHTML to opt out of special attribute
                            // handling. To look up the attribute value we also need to add
                            // the suffix.
                            const attributeLookupName = name.toLowerCase() + boundAttributeSuffix;
                            const attributeValue = node.getAttribute(attributeLookupName);
                            node.removeAttribute(attributeLookupName);
                            const statics = attributeValue.split(markerRegex);
                            this.parts.push({ type: 'attribute', index, name, strings: statics });
                            partIndex += statics.length - 1;
                        }
                    }
                    if (node.tagName === 'TEMPLATE') {
                        stack.push(node);
                        walker.currentNode = node.content;
                    }
                }
                else if (node.nodeType === 3 /* Node.TEXT_NODE */) {
                    const data = node.data;
                    if (data.indexOf(marker) >= 0) {
                        const parent = node.parentNode;
                        const strings = data.split(markerRegex);
                        const lastIndex = strings.length - 1;
                        // Generate a new text node for each literal section
                        // These nodes are also used as the markers for node parts
                        for (let i = 0; i < lastIndex; i++) {
                            let insert;
                            let s = strings[i];
                            if (s === '') {
                                insert = createMarker();
                            }
                            else {
                                const match = lastAttributeNameRegex.exec(s);
                                if (match !== null && endsWith(match[2], boundAttributeSuffix)) {
                                    s = s.slice(0, match.index) + match[1] +
                                        match[2].slice(0, -boundAttributeSuffix.length) + match[3];
                                }
                                insert = document.createTextNode(s);
                            }
                            parent.insertBefore(insert, node);
                            this.parts.push({ type: 'node', index: ++index });
                        }
                        // If there's no text, we must insert a comment to mark our place.
                        // Else, we can trust it will stick around after cloning.
                        if (strings[lastIndex] === '') {
                            parent.insertBefore(createMarker(), node);
                            nodesToRemove.push(node);
                        }
                        else {
                            node.data = strings[lastIndex];
                        }
                        // We have a part for each match found
                        partIndex += lastIndex;
                    }
                }
                else if (node.nodeType === 8 /* Node.COMMENT_NODE */) {
                    if (node.data === marker) {
                        const parent = node.parentNode;
                        // Add a new marker node to be the startNode of the Part if any of
                        // the following are true:
                        //  * We don't have a previousSibling
                        //  * The previousSibling is already the start of a previous part
                        if (node.previousSibling === null || index === lastPartIndex) {
                            index++;
                            parent.insertBefore(createMarker(), node);
                        }
                        lastPartIndex = index;
                        this.parts.push({ type: 'node', index });
                        // If we don't have a nextSibling, keep this node so we have an end.
                        // Else, we can remove it to save future costs.
                        if (node.nextSibling === null) {
                            node.data = '';
                        }
                        else {
                            nodesToRemove.push(node);
                            index--;
                        }
                        partIndex++;
                    }
                    else {
                        let i = -1;
                        while ((i = node.data.indexOf(marker, i + 1)) !== -1) {
                            // Comment node has a binding marker inside, make an inactive part
                            // The binding won't work, but subsequent bindings will
                            // TODO (justinfagnani): consider whether it's even worth it to
                            // make bindings in comments work
                            this.parts.push({ type: 'node', index: -1 });
                            partIndex++;
                        }
                    }
                }
            }
            // Remove text binding nodes after the walk to not disturb the TreeWalker
            for (const n of nodesToRemove) {
                n.parentNode.removeChild(n);
            }
        }
    }
    const endsWith = (str, suffix) => {
        const index = str.length - suffix.length;
        return index >= 0 && str.slice(index) === suffix;
    };
    const isTemplatePartActive = (part) => part.index !== -1;
    // Allows `document.createComment('')` to be renamed for a
    // small manual size-savings.
    const createMarker = () => document.createComment('');
    /**
     * This regex extracts the attribute name preceding an attribute-position
     * expression. It does this by matching the syntax allowed for attributes
     * against the string literal directly preceding the expression, assuming that
     * the expression is in an attribute-value position.
     *
     * See attributes in the HTML spec:
     * https://www.w3.org/TR/html5/syntax.html#elements-attributes
     *
     * " \x09\x0a\x0c\x0d" are HTML space characters:
     * https://www.w3.org/TR/html5/infrastructure.html#space-characters
     *
     * "\0-\x1F\x7F-\x9F" are Unicode control characters, which includes every
     * space character except " ".
     *
     * So an attribute is:
     *  * The name: any character except a control character, space character, ('),
     *    ("), ">", "=", or "/"
     *  * Followed by zero or more space characters
     *  * Followed by "="
     *  * Followed by zero or more space characters
     *  * Followed by:
     *    * Any character except space, ('), ("), "<", ">", "=", (`), or
     *    * (") then any non-("), or
     *    * (') then any non-(')
     */
    const lastAttributeNameRegex = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;

    /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
    /**
     * An instance of a `Template` that can be attached to the DOM and updated
     * with new values.
     */
    class TemplateInstance {
        constructor(template, processor, options) {
            this.__parts = [];
            this.template = template;
            this.processor = processor;
            this.options = options;
        }
        update(values) {
            let i = 0;
            for (const part of this.__parts) {
                if (part !== undefined) {
                    part.setValue(values[i]);
                }
                i++;
            }
            for (const part of this.__parts) {
                if (part !== undefined) {
                    part.commit();
                }
            }
        }
        _clone() {
            // There are a number of steps in the lifecycle of a template instance's
            // DOM fragment:
            //  1. Clone - create the instance fragment
            //  2. Adopt - adopt into the main document
            //  3. Process - find part markers and create parts
            //  4. Upgrade - upgrade custom elements
            //  5. Update - set node, attribute, property, etc., values
            //  6. Connect - connect to the document. Optional and outside of this
            //     method.
            //
            // We have a few constraints on the ordering of these steps:
            //  * We need to upgrade before updating, so that property values will pass
            //    through any property setters.
            //  * We would like to process before upgrading so that we're sure that the
            //    cloned fragment is inert and not disturbed by self-modifying DOM.
            //  * We want custom elements to upgrade even in disconnected fragments.
            //
            // Given these constraints, with full custom elements support we would
            // prefer the order: Clone, Process, Adopt, Upgrade, Update, Connect
            //
            // But Safari dooes not implement CustomElementRegistry#upgrade, so we
            // can not implement that order and still have upgrade-before-update and
            // upgrade disconnected fragments. So we instead sacrifice the
            // process-before-upgrade constraint, since in Custom Elements v1 elements
            // must not modify their light DOM in the constructor. We still have issues
            // when co-existing with CEv0 elements like Polymer 1, and with polyfills
            // that don't strictly adhere to the no-modification rule because shadow
            // DOM, which may be created in the constructor, is emulated by being placed
            // in the light DOM.
            //
            // The resulting order is on native is: Clone, Adopt, Upgrade, Process,
            // Update, Connect. document.importNode() performs Clone, Adopt, and Upgrade
            // in one step.
            //
            // The Custom Elements v1 polyfill supports upgrade(), so the order when
            // polyfilled is the more ideal: Clone, Process, Adopt, Upgrade, Update,
            // Connect.
            const fragment = isCEPolyfill ?
                this.template.element.content.cloneNode(true) :
                document.importNode(this.template.element.content, true);
            const stack = [];
            const parts = this.template.parts;
            // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null
            const walker = document.createTreeWalker(fragment, 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */, null, false);
            let partIndex = 0;
            let nodeIndex = 0;
            let part;
            let node = walker.nextNode();
            // Loop through all the nodes and parts of a template
            while (partIndex < parts.length) {
                part = parts[partIndex];
                if (!isTemplatePartActive(part)) {
                    this.__parts.push(undefined);
                    partIndex++;
                    continue;
                }
                // Progress the tree walker until we find our next part's node.
                // Note that multiple parts may share the same node (attribute parts
                // on a single element), so this loop may not run at all.
                while (nodeIndex < part.index) {
                    nodeIndex++;
                    if (node.nodeName === 'TEMPLATE') {
                        stack.push(node);
                        walker.currentNode = node.content;
                    }
                    if ((node = walker.nextNode()) === null) {
                        // We've exhausted the content inside a nested template element.
                        // Because we still have parts (the outer for-loop), we know:
                        // - There is a template in the stack
                        // - The walker will find a nextNode outside the template
                        walker.currentNode = stack.pop();
                        node = walker.nextNode();
                    }
                }
                // We've arrived at our part's node.
                if (part.type === 'node') {
                    const part = this.processor.handleTextExpression(this.options);
                    part.insertAfterNode(node.previousSibling);
                    this.__parts.push(part);
                }
                else {
                    this.__parts.push(...this.processor.handleAttributeExpressions(node, part.name, part.strings, this.options));
                }
                partIndex++;
            }
            if (isCEPolyfill) {
                document.adoptNode(fragment);
                customElements.upgrade(fragment);
            }
            return fragment;
        }
    }

    /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
    const commentMarker = ` ${marker} `;
    /**
     * The return type of `html`, which holds a Template and the values from
     * interpolated expressions.
     */
    class TemplateResult {
        constructor(strings, values, type, processor) {
            this.strings = strings;
            this.values = values;
            this.type = type;
            this.processor = processor;
        }
        /**
         * Returns a string of HTML used to create a `<template>` element.
         */
        getHTML() {
            const l = this.strings.length - 1;
            let html = '';
            let isCommentBinding = false;
            for (let i = 0; i < l; i++) {
                const s = this.strings[i];
                // For each binding we want to determine the kind of marker to insert
                // into the template source before it's parsed by the browser's HTML
                // parser. The marker type is based on whether the expression is in an
                // attribute, text, or comment poisition.
                //   * For node-position bindings we insert a comment with the marker
                //     sentinel as its text content, like <!--{{lit-guid}}-->.
                //   * For attribute bindings we insert just the marker sentinel for the
                //     first binding, so that we support unquoted attribute bindings.
                //     Subsequent bindings can use a comment marker because multi-binding
                //     attributes must be quoted.
                //   * For comment bindings we insert just the marker sentinel so we don't
                //     close the comment.
                //
                // The following code scans the template source, but is *not* an HTML
                // parser. We don't need to track the tree structure of the HTML, only
                // whether a binding is inside a comment, and if not, if it appears to be
                // the first binding in an attribute.
                const commentOpen = s.lastIndexOf('<!--');
                // We're in comment position if we have a comment open with no following
                // comment close. Because <-- can appear in an attribute value there can
                // be false positives.
                isCommentBinding = (commentOpen > -1 || isCommentBinding) &&
                    s.indexOf('-->', commentOpen + 1) === -1;
                // Check to see if we have an attribute-like sequence preceeding the
                // expression. This can match "name=value" like structures in text,
                // comments, and attribute values, so there can be false-positives.
                const attributeMatch = lastAttributeNameRegex.exec(s);
                if (attributeMatch === null) {
                    // We're only in this branch if we don't have a attribute-like
                    // preceeding sequence. For comments, this guards against unusual
                    // attribute values like <div foo="<!--${'bar'}">. Cases like
                    // <!-- foo=${'bar'}--> are handled correctly in the attribute branch
                    // below.
                    html += s + (isCommentBinding ? commentMarker : nodeMarker);
                }
                else {
                    // For attributes we use just a marker sentinel, and also append a
                    // $lit$ suffix to the name to opt-out of attribute-specific parsing
                    // that IE and Edge do for style and certain SVG attributes.
                    html += s.substr(0, attributeMatch.index) + attributeMatch[1] +
                        attributeMatch[2] + boundAttributeSuffix + attributeMatch[3] +
                        marker;
                }
            }
            html += this.strings[l];
            return html;
        }
        getTemplateElement() {
            const template = document.createElement('template');
            template.innerHTML = this.getHTML();
            return template;
        }
    }

    /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
    const isPrimitive = (value) => {
        return (value === null ||
            !(typeof value === 'object' || typeof value === 'function'));
    };
    const isIterable = (value) => {
        return Array.isArray(value) ||
            // tslint:disable-next-line:no-any
            !!(value && value[Symbol.iterator]);
    };
    /**
     * Writes attribute values to the DOM for a group of AttributeParts bound to a
     * single attibute. The value is only set once even if there are multiple parts
     * for an attribute.
     */
    class AttributeCommitter {
        constructor(element, name, strings) {
            this.dirty = true;
            this.element = element;
            this.name = name;
            this.strings = strings;
            this.parts = [];
            for (let i = 0; i < strings.length - 1; i++) {
                this.parts[i] = this._createPart();
            }
        }
        /**
         * Creates a single part. Override this to create a differnt type of part.
         */
        _createPart() {
            return new AttributePart(this);
        }
        _getValue() {
            const strings = this.strings;
            const l = strings.length - 1;
            let text = '';
            for (let i = 0; i < l; i++) {
                text += strings[i];
                const part = this.parts[i];
                if (part !== undefined) {
                    const v = part.value;
                    if (isPrimitive(v) || !isIterable(v)) {
                        text += typeof v === 'string' ? v : String(v);
                    }
                    else {
                        for (const t of v) {
                            text += typeof t === 'string' ? t : String(t);
                        }
                    }
                }
            }
            text += strings[l];
            return text;
        }
        commit() {
            if (this.dirty) {
                this.dirty = false;
                this.element.setAttribute(this.name, this._getValue());
            }
        }
    }
    /**
     * A Part that controls all or part of an attribute value.
     */
    class AttributePart {
        constructor(committer) {
            this.value = undefined;
            this.committer = committer;
        }
        setValue(value) {
            if (value !== noChange && (!isPrimitive(value) || value !== this.value)) {
                this.value = value;
                // If the value is a not a directive, dirty the committer so that it'll
                // call setAttribute. If the value is a directive, it'll dirty the
                // committer if it calls setValue().
                if (!isDirective(value)) {
                    this.committer.dirty = true;
                }
            }
        }
        commit() {
            while (isDirective(this.value)) {
                const directive = this.value;
                this.value = noChange;
                directive(this);
            }
            if (this.value === noChange) {
                return;
            }
            this.committer.commit();
        }
    }
    /**
     * A Part that controls a location within a Node tree. Like a Range, NodePart
     * has start and end locations and can set and update the Nodes between those
     * locations.
     *
     * NodeParts support several value types: primitives, Nodes, TemplateResults,
     * as well as arrays and iterables of those types.
     */
    class NodePart {
        constructor(options) {
            this.value = undefined;
            this.__pendingValue = undefined;
            this.options = options;
        }
        /**
         * Appends this part into a container.
         *
         * This part must be empty, as its contents are not automatically moved.
         */
        appendInto(container) {
            this.startNode = container.appendChild(createMarker());
            this.endNode = container.appendChild(createMarker());
        }
        /**
         * Inserts this part after the `ref` node (between `ref` and `ref`'s next
         * sibling). Both `ref` and its next sibling must be static, unchanging nodes
         * such as those that appear in a literal section of a template.
         *
         * This part must be empty, as its contents are not automatically moved.
         */
        insertAfterNode(ref) {
            this.startNode = ref;
            this.endNode = ref.nextSibling;
        }
        /**
         * Appends this part into a parent part.
         *
         * This part must be empty, as its contents are not automatically moved.
         */
        appendIntoPart(part) {
            part.__insert(this.startNode = createMarker());
            part.__insert(this.endNode = createMarker());
        }
        /**
         * Inserts this part after the `ref` part.
         *
         * This part must be empty, as its contents are not automatically moved.
         */
        insertAfterPart(ref) {
            ref.__insert(this.startNode = createMarker());
            this.endNode = ref.endNode;
            ref.endNode = this.startNode;
        }
        setValue(value) {
            this.__pendingValue = value;
        }
        commit() {
            while (isDirective(this.__pendingValue)) {
                const directive = this.__pendingValue;
                this.__pendingValue = noChange;
                directive(this);
            }
            const value = this.__pendingValue;
            if (value === noChange) {
                return;
            }
            if (isPrimitive(value)) {
                if (value !== this.value) {
                    this.__commitText(value);
                }
            }
            else if (value instanceof TemplateResult) {
                this.__commitTemplateResult(value);
            }
            else if (value instanceof Node) {
                this.__commitNode(value);
            }
            else if (isIterable(value)) {
                this.__commitIterable(value);
            }
            else if (value === nothing) {
                this.value = nothing;
                this.clear();
            }
            else {
                // Fallback, will render the string representation
                this.__commitText(value);
            }
        }
        __insert(node) {
            this.endNode.parentNode.insertBefore(node, this.endNode);
        }
        __commitNode(value) {
            if (this.value === value) {
                return;
            }
            this.clear();
            this.__insert(value);
            this.value = value;
        }
        __commitText(value) {
            const node = this.startNode.nextSibling;
            value = value == null ? '' : value;
            // If `value` isn't already a string, we explicitly convert it here in case
            // it can't be implicitly converted - i.e. it's a symbol.
            const valueAsString = typeof value === 'string' ? value : String(value);
            if (node === this.endNode.previousSibling &&
                node.nodeType === 3 /* Node.TEXT_NODE */) {
                // If we only have a single text node between the markers, we can just
                // set its value, rather than replacing it.
                // TODO(justinfagnani): Can we just check if this.value is primitive?
                node.data = valueAsString;
            }
            else {
                this.__commitNode(document.createTextNode(valueAsString));
            }
            this.value = value;
        }
        __commitTemplateResult(value) {
            const template = this.options.templateFactory(value);
            if (this.value instanceof TemplateInstance &&
                this.value.template === template) {
                this.value.update(value.values);
            }
            else {
                // Make sure we propagate the template processor from the TemplateResult
                // so that we use its syntax extension, etc. The template factory comes
                // from the render function options so that it can control template
                // caching and preprocessing.
                const instance = new TemplateInstance(template, value.processor, this.options);
                const fragment = instance._clone();
                instance.update(value.values);
                this.__commitNode(fragment);
                this.value = instance;
            }
        }
        __commitIterable(value) {
            // For an Iterable, we create a new InstancePart per item, then set its
            // value to the item. This is a little bit of overhead for every item in
            // an Iterable, but it lets us recurse easily and efficiently update Arrays
            // of TemplateResults that will be commonly returned from expressions like:
            // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
            // If _value is an array, then the previous render was of an
            // iterable and _value will contain the NodeParts from the previous
            // render. If _value is not an array, clear this part and make a new
            // array for NodeParts.
            if (!Array.isArray(this.value)) {
                this.value = [];
                this.clear();
            }
            // Lets us keep track of how many items we stamped so we can clear leftover
            // items from a previous render
            const itemParts = this.value;
            let partIndex = 0;
            let itemPart;
            for (const item of value) {
                // Try to reuse an existing part
                itemPart = itemParts[partIndex];
                // If no existing part, create a new one
                if (itemPart === undefined) {
                    itemPart = new NodePart(this.options);
                    itemParts.push(itemPart);
                    if (partIndex === 0) {
                        itemPart.appendIntoPart(this);
                    }
                    else {
                        itemPart.insertAfterPart(itemParts[partIndex - 1]);
                    }
                }
                itemPart.setValue(item);
                itemPart.commit();
                partIndex++;
            }
            if (partIndex < itemParts.length) {
                // Truncate the parts array so _value reflects the current state
                itemParts.length = partIndex;
                this.clear(itemPart && itemPart.endNode);
            }
        }
        clear(startNode = this.startNode) {
            removeNodes(this.startNode.parentNode, startNode.nextSibling, this.endNode);
        }
    }
    /**
     * Implements a boolean attribute, roughly as defined in the HTML
     * specification.
     *
     * If the value is truthy, then the attribute is present with a value of
     * ''. If the value is falsey, the attribute is removed.
     */
    class BooleanAttributePart {
        constructor(element, name, strings) {
            this.value = undefined;
            this.__pendingValue = undefined;
            if (strings.length !== 2 || strings[0] !== '' || strings[1] !== '') {
                throw new Error('Boolean attributes can only contain a single expression');
            }
            this.element = element;
            this.name = name;
            this.strings = strings;
        }
        setValue(value) {
            this.__pendingValue = value;
        }
        commit() {
            while (isDirective(this.__pendingValue)) {
                const directive = this.__pendingValue;
                this.__pendingValue = noChange;
                directive(this);
            }
            if (this.__pendingValue === noChange) {
                return;
            }
            const value = !!this.__pendingValue;
            if (this.value !== value) {
                if (value) {
                    this.element.setAttribute(this.name, '');
                }
                else {
                    this.element.removeAttribute(this.name);
                }
                this.value = value;
            }
            this.__pendingValue = noChange;
        }
    }
    /**
     * Sets attribute values for PropertyParts, so that the value is only set once
     * even if there are multiple parts for a property.
     *
     * If an expression controls the whole property value, then the value is simply
     * assigned to the property under control. If there are string literals or
     * multiple expressions, then the strings are expressions are interpolated into
     * a string first.
     */
    class PropertyCommitter extends AttributeCommitter {
        constructor(element, name, strings) {
            super(element, name, strings);
            this.single =
                (strings.length === 2 && strings[0] === '' && strings[1] === '');
        }
        _createPart() {
            return new PropertyPart(this);
        }
        _getValue() {
            if (this.single) {
                return this.parts[0].value;
            }
            return super._getValue();
        }
        commit() {
            if (this.dirty) {
                this.dirty = false;
                // tslint:disable-next-line:no-any
                this.element[this.name] = this._getValue();
            }
        }
    }
    class PropertyPart extends AttributePart {
    }
    // Detect event listener options support. If the `capture` property is read
    // from the options object, then options are supported. If not, then the thrid
    // argument to add/removeEventListener is interpreted as the boolean capture
    // value so we should only pass the `capture` property.
    let eventOptionsSupported = false;
    try {
        const options = {
            get capture() {
                eventOptionsSupported = true;
                return false;
            }
        };
        // tslint:disable-next-line:no-any
        window.addEventListener('test', options, options);
        // tslint:disable-next-line:no-any
        window.removeEventListener('test', options, options);
    }
    catch (_e) {
    }
    class EventPart {
        constructor(element, eventName, eventContext) {
            this.value = undefined;
            this.__pendingValue = undefined;
            this.element = element;
            this.eventName = eventName;
            this.eventContext = eventContext;
            this.__boundHandleEvent = (e) => this.handleEvent(e);
        }
        setValue(value) {
            this.__pendingValue = value;
        }
        commit() {
            while (isDirective(this.__pendingValue)) {
                const directive = this.__pendingValue;
                this.__pendingValue = noChange;
                directive(this);
            }
            if (this.__pendingValue === noChange) {
                return;
            }
            const newListener = this.__pendingValue;
            const oldListener = this.value;
            const shouldRemoveListener = newListener == null ||
                oldListener != null &&
                    (newListener.capture !== oldListener.capture ||
                        newListener.once !== oldListener.once ||
                        newListener.passive !== oldListener.passive);
            const shouldAddListener = newListener != null && (oldListener == null || shouldRemoveListener);
            if (shouldRemoveListener) {
                this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options);
            }
            if (shouldAddListener) {
                this.__options = getOptions(newListener);
                this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options);
            }
            this.value = newListener;
            this.__pendingValue = noChange;
        }
        handleEvent(event) {
            if (typeof this.value === 'function') {
                this.value.call(this.eventContext || this.element, event);
            }
            else {
                this.value.handleEvent(event);
            }
        }
    }
    // We copy options because of the inconsistent behavior of browsers when reading
    // the third argument of add/removeEventListener. IE11 doesn't support options
    // at all. Chrome 41 only reads `capture` if the argument is an object.
    const getOptions = (o) => o &&
        (eventOptionsSupported ?
            { capture: o.capture, passive: o.passive, once: o.once } :
            o.capture);

    /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
    /**
     * Creates Parts when a template is instantiated.
     */
    class DefaultTemplateProcessor {
        /**
         * Create parts for an attribute-position binding, given the event, attribute
         * name, and string literals.
         *
         * @param element The element containing the binding
         * @param name  The attribute name
         * @param strings The string literals. There are always at least two strings,
         *   event for fully-controlled bindings with a single expression.
         */
        handleAttributeExpressions(element, name, strings, options) {
            const prefix = name[0];
            if (prefix === '.') {
                const committer = new PropertyCommitter(element, name.slice(1), strings);
                return committer.parts;
            }
            if (prefix === '@') {
                return [new EventPart(element, name.slice(1), options.eventContext)];
            }
            if (prefix === '?') {
                return [new BooleanAttributePart(element, name.slice(1), strings)];
            }
            const committer = new AttributeCommitter(element, name, strings);
            return committer.parts;
        }
        /**
         * Create parts for a text-position binding.
         * @param templateFactory
         */
        handleTextExpression(options) {
            return new NodePart(options);
        }
    }
    const defaultTemplateProcessor = new DefaultTemplateProcessor();

    /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
    /**
     * The default TemplateFactory which caches Templates keyed on
     * result.type and result.strings.
     */
    function templateFactory(result) {
        let templateCache = templateCaches.get(result.type);
        if (templateCache === undefined) {
            templateCache = {
                stringsArray: new WeakMap(),
                keyString: new Map()
            };
            templateCaches.set(result.type, templateCache);
        }
        let template = templateCache.stringsArray.get(result.strings);
        if (template !== undefined) {
            return template;
        }
        // If the TemplateStringsArray is new, generate a key from the strings
        // This key is shared between all templates with identical content
        const key = result.strings.join(marker);
        // Check if we already have a Template for this key
        template = templateCache.keyString.get(key);
        if (template === undefined) {
            // If we have not seen this key before, create a new Template
            template = new Template(result, result.getTemplateElement());
            // Cache the Template for this key
            templateCache.keyString.set(key, template);
        }
        // Cache all future queries for this TemplateStringsArray
        templateCache.stringsArray.set(result.strings, template);
        return template;
    }
    const templateCaches = new Map();

    /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
    const parts = new WeakMap();
    /**
     * Renders a template result or other value to a container.
     *
     * To update a container with new values, reevaluate the template literal and
     * call `render` with the new result.
     *
     * @param result Any value renderable by NodePart - typically a TemplateResult
     *     created by evaluating a template tag like `html` or `svg`.
     * @param container A DOM parent to render to. The entire contents are either
     *     replaced, or efficiently updated if the same result type was previous
     *     rendered there.
     * @param options RenderOptions for the entire render tree rendered to this
     *     container. Render options must *not* change between renders to the same
     *     container, as those changes will not effect previously rendered DOM.
     */
    const render = (result, container, options) => {
        let part = parts.get(container);
        if (part === undefined) {
            removeNodes(container, container.firstChild);
            parts.set(container, part = new NodePart(Object.assign({ templateFactory }, options)));
            part.appendInto(container);
        }
        part.setValue(result);
        part.commit();
    };

    /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
    // IMPORTANT: do not change the property name or the assignment expression.
    // This line will be used in regexes to search for lit-html usage.
    // TODO(justinfagnani): inject version number at build time
    (window['litHtmlVersions'] || (window['litHtmlVersions'] = [])).push('1.1.2');
    /**
     * Interprets a template literal as an HTML template that can efficiently
     * render to and update a container.
     */
    const html = (strings, ...values) => new TemplateResult(strings, values, 'html', defaultTemplateProcessor);

    /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
    const walkerNodeFilter = 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */;
    /**
     * Removes the list of nodes from a Template safely. In addition to removing
     * nodes from the Template, the Template part indices are updated to match
     * the mutated Template DOM.
     *
     * As the template is walked the removal state is tracked and
     * part indices are adjusted as needed.
     *
     * div
     *   div#1 (remove) <-- start removing (removing node is div#1)
     *     div
     *       div#2 (remove)  <-- continue removing (removing node is still div#1)
     *         div
     * div <-- stop removing since previous sibling is the removing node (div#1,
     * removed 4 nodes)
     */
    function removeNodesFromTemplate(template, nodesToRemove) {
        const { element: { content }, parts } = template;
        const walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
        let partIndex = nextActiveIndexInTemplateParts(parts);
        let part = parts[partIndex];
        let nodeIndex = -1;
        let removeCount = 0;
        const nodesToRemoveInTemplate = [];
        let currentRemovingNode = null;
        while (walker.nextNode()) {
            nodeIndex++;
            const node = walker.currentNode;
            // End removal if stepped past the removing node
            if (node.previousSibling === currentRemovingNode) {
                currentRemovingNode = null;
            }
            // A node to remove was found in the template
            if (nodesToRemove.has(node)) {
                nodesToRemoveInTemplate.push(node);
                // Track node we're removing
                if (currentRemovingNode === null) {
                    currentRemovingNode = node;
                }
            }
            // When removing, increment count by which to adjust subsequent part indices
            if (currentRemovingNode !== null) {
                removeCount++;
            }
            while (part !== undefined && part.index === nodeIndex) {
                // If part is in a removed node deactivate it by setting index to -1 or
                // adjust the index as needed.
                part.index = currentRemovingNode !== null ? -1 : part.index - removeCount;
                // go to the next active part.
                partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
                part = parts[partIndex];
            }
        }
        nodesToRemoveInTemplate.forEach((n) => n.parentNode.removeChild(n));
    }
    const countNodes = (node) => {
        let count = (node.nodeType === 11 /* Node.DOCUMENT_FRAGMENT_NODE */) ? 0 : 1;
        const walker = document.createTreeWalker(node, walkerNodeFilter, null, false);
        while (walker.nextNode()) {
            count++;
        }
        return count;
    };
    const nextActiveIndexInTemplateParts = (parts, startIndex = -1) => {
        for (let i = startIndex + 1; i < parts.length; i++) {
            const part = parts[i];
            if (isTemplatePartActive(part)) {
                return i;
            }
        }
        return -1;
    };
    /**
     * Inserts the given node into the Template, optionally before the given
     * refNode. In addition to inserting the node into the Template, the Template
     * part indices are updated to match the mutated Template DOM.
     */
    function insertNodeIntoTemplate(template, node, refNode = null) {
        const { element: { content }, parts } = template;
        // If there's no refNode, then put node at end of template.
        // No part indices need to be shifted in this case.
        if (refNode === null || refNode === undefined) {
            content.appendChild(node);
            return;
        }
        const walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
        let partIndex = nextActiveIndexInTemplateParts(parts);
        let insertCount = 0;
        let walkerIndex = -1;
        while (walker.nextNode()) {
            walkerIndex++;
            const walkerNode = walker.currentNode;
            if (walkerNode === refNode) {
                insertCount = countNodes(node);
                refNode.parentNode.insertBefore(node, refNode);
            }
            while (partIndex !== -1 && parts[partIndex].index === walkerIndex) {
                // If we've inserted the node, simply adjust all subsequent parts
                if (insertCount > 0) {
                    while (partIndex !== -1) {
                        parts[partIndex].index += insertCount;
                        partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
                    }
                    return;
                }
                partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
            }
        }
    }

    /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
    // Get a key to lookup in `templateCaches`.
    const getTemplateCacheKey = (type, scopeName) => `${type}--${scopeName}`;
    let compatibleShadyCSSVersion = true;
    if (typeof window.ShadyCSS === 'undefined') {
        compatibleShadyCSSVersion = false;
    }
    else if (typeof window.ShadyCSS.prepareTemplateDom === 'undefined') {
        console.warn(`Incompatible ShadyCSS version detected. ` +
            `Please update to at least @webcomponents/webcomponentsjs@2.0.2 and ` +
            `@webcomponents/shadycss@1.3.1.`);
        compatibleShadyCSSVersion = false;
    }
    /**
     * Template factory which scopes template DOM using ShadyCSS.
     * @param scopeName {string}
     */
    const shadyTemplateFactory = (scopeName) => (result) => {
        const cacheKey = getTemplateCacheKey(result.type, scopeName);
        let templateCache = templateCaches.get(cacheKey);
        if (templateCache === undefined) {
            templateCache = {
                stringsArray: new WeakMap(),
                keyString: new Map()
            };
            templateCaches.set(cacheKey, templateCache);
        }
        let template = templateCache.stringsArray.get(result.strings);
        if (template !== undefined) {
            return template;
        }
        const key = result.strings.join(marker);
        template = templateCache.keyString.get(key);
        if (template === undefined) {
            const element = result.getTemplateElement();
            if (compatibleShadyCSSVersion) {
                window.ShadyCSS.prepareTemplateDom(element, scopeName);
            }
            template = new Template(result, element);
            templateCache.keyString.set(key, template);
        }
        templateCache.stringsArray.set(result.strings, template);
        return template;
    };
    const TEMPLATE_TYPES = ['html', 'svg'];
    /**
     * Removes all style elements from Templates for the given scopeName.
     */
    const removeStylesFromLitTemplates = (scopeName) => {
        TEMPLATE_TYPES.forEach((type) => {
            const templates = templateCaches.get(getTemplateCacheKey(type, scopeName));
            if (templates !== undefined) {
                templates.keyString.forEach((template) => {
                    const { element: { content } } = template;
                    // IE 11 doesn't support the iterable param Set constructor
                    const styles = new Set();
                    Array.from(content.querySelectorAll('style')).forEach((s) => {
                        styles.add(s);
                    });
                    removeNodesFromTemplate(template, styles);
                });
            }
        });
    };
    const shadyRenderSet = new Set();
    /**
     * For the given scope name, ensures that ShadyCSS style scoping is performed.
     * This is done just once per scope name so the fragment and template cannot
     * be modified.
     * (1) extracts styles from the rendered fragment and hands them to ShadyCSS
     * to be scoped and appended to the document
     * (2) removes style elements from all lit-html Templates for this scope name.
     *
     * Note, <style> elements can only be placed into templates for the
     * initial rendering of the scope. If <style> elements are included in templates
     * dynamically rendered to the scope (after the first scope render), they will
     * not be scoped and the <style> will be left in the template and rendered
     * output.
     */
    const prepareTemplateStyles = (scopeName, renderedDOM, template) => {
        shadyRenderSet.add(scopeName);
        // If `renderedDOM` is stamped from a Template, then we need to edit that
        // Template's underlying template element. Otherwise, we create one here
        // to give to ShadyCSS, which still requires one while scoping.
        const templateElement = !!template ? template.element : document.createElement('template');
        // Move styles out of rendered DOM and store.
        const styles = renderedDOM.querySelectorAll('style');
        const { length } = styles;
        // If there are no styles, skip unnecessary work
        if (length === 0) {
            // Ensure prepareTemplateStyles is called to support adding
            // styles via `prepareAdoptedCssText` since that requires that
            // `prepareTemplateStyles` is called.
            //
            // ShadyCSS will only update styles containing @apply in the template
            // given to `prepareTemplateStyles`. If no lit Template was given,
            // ShadyCSS will not be able to update uses of @apply in any relevant
            // template. However, this is not a problem because we only create the
            // template for the purpose of supporting `prepareAdoptedCssText`,
            // which doesn't support @apply at all.
            window.ShadyCSS.prepareTemplateStyles(templateElement, scopeName);
            return;
        }
        const condensedStyle = document.createElement('style');
        // Collect styles into a single style. This helps us make sure ShadyCSS
        // manipulations will not prevent us from being able to fix up template
        // part indices.
        // NOTE: collecting styles is inefficient for browsers but ShadyCSS
        // currently does this anyway. When it does not, this should be changed.
        for (let i = 0; i < length; i++) {
            const style = styles[i];
            style.parentNode.removeChild(style);
            condensedStyle.textContent += style.textContent;
        }
        // Remove styles from nested templates in this scope.
        removeStylesFromLitTemplates(scopeName);
        // And then put the condensed style into the "root" template passed in as
        // `template`.
        const content = templateElement.content;
        if (!!template) {
            insertNodeIntoTemplate(template, condensedStyle, content.firstChild);
        }
        else {
            content.insertBefore(condensedStyle, content.firstChild);
        }
        // Note, it's important that ShadyCSS gets the template that `lit-html`
        // will actually render so that it can update the style inside when
        // needed (e.g. @apply native Shadow DOM case).
        window.ShadyCSS.prepareTemplateStyles(templateElement, scopeName);
        const style = content.querySelector('style');
        if (window.ShadyCSS.nativeShadow && style !== null) {
            // When in native Shadow DOM, ensure the style created by ShadyCSS is
            // included in initially rendered output (`renderedDOM`).
            renderedDOM.insertBefore(style.cloneNode(true), renderedDOM.firstChild);
        }
        else if (!!template) {
            // When no style is left in the template, parts will be broken as a
            // result. To fix this, we put back the style node ShadyCSS removed
            // and then tell lit to remove that node from the template.
            // There can be no style in the template in 2 cases (1) when Shady DOM
            // is in use, ShadyCSS removes all styles, (2) when native Shadow DOM
            // is in use ShadyCSS removes the style if it contains no content.
            // NOTE, ShadyCSS creates its own style so we can safely add/remove
            // `condensedStyle` here.
            content.insertBefore(condensedStyle, content.firstChild);
            const removes = new Set();
            removes.add(condensedStyle);
            removeNodesFromTemplate(template, removes);
        }
    };
    /**
     * Extension to the standard `render` method which supports rendering
     * to ShadowRoots when the ShadyDOM (https://github.com/webcomponents/shadydom)
     * and ShadyCSS (https://github.com/webcomponents/shadycss) polyfills are used
     * or when the webcomponentsjs
     * (https://github.com/webcomponents/webcomponentsjs) polyfill is used.
     *
     * Adds a `scopeName` option which is used to scope element DOM and stylesheets
     * when native ShadowDOM is unavailable. The `scopeName` will be added to
     * the class attribute of all rendered DOM. In addition, any style elements will
     * be automatically re-written with this `scopeName` selector and moved out
     * of the rendered DOM and into the document `<head>`.
     *
     * It is common to use this render method in conjunction with a custom element
     * which renders a shadowRoot. When this is done, typically the element's
     * `localName` should be used as the `scopeName`.
     *
     * In addition to DOM scoping, ShadyCSS also supports a basic shim for css
     * custom properties (needed only on older browsers like IE11) and a shim for
     * a deprecated feature called `@apply` that supports applying a set of css
     * custom properties to a given location.
     *
     * Usage considerations:
     *
     * * Part values in `<style>` elements are only applied the first time a given
     * `scopeName` renders. Subsequent changes to parts in style elements will have
     * no effect. Because of this, parts in style elements should only be used for
     * values that will never change, for example parts that set scope-wide theme
     * values or parts which render shared style elements.
     *
     * * Note, due to a limitation of the ShadyDOM polyfill, rendering in a
     * custom element's `constructor` is not supported. Instead rendering should
     * either done asynchronously, for example at microtask timing (for example
     * `Promise.resolve()`), or be deferred until the first time the element's
     * `connectedCallback` runs.
     *
     * Usage considerations when using shimmed custom properties or `@apply`:
     *
     * * Whenever any dynamic changes are made which affect
     * css custom properties, `ShadyCSS.styleElement(element)` must be called
     * to update the element. There are two cases when this is needed:
     * (1) the element is connected to a new parent, (2) a class is added to the
     * element that causes it to match different custom properties.
     * To address the first case when rendering a custom element, `styleElement`
     * should be called in the element's `connectedCallback`.
     *
     * * Shimmed custom properties may only be defined either for an entire
     * shadowRoot (for example, in a `:host` rule) or via a rule that directly
     * matches an element with a shadowRoot. In other words, instead of flowing from
     * parent to child as do native css custom properties, shimmed custom properties
     * flow only from shadowRoots to nested shadowRoots.
     *
     * * When using `@apply` mixing css shorthand property names with
     * non-shorthand names (for example `border` and `border-width`) is not
     * supported.
     */
    const render$1 = (result, container, options) => {
        if (!options || typeof options !== 'object' || !options.scopeName) {
            throw new Error('The `scopeName` option is required.');
        }
        const scopeName = options.scopeName;
        const hasRendered = parts.has(container);
        const needsScoping = compatibleShadyCSSVersion &&
            container.nodeType === 11 /* Node.DOCUMENT_FRAGMENT_NODE */ &&
            !!container.host;
        // Handle first render to a scope specially...
        const firstScopeRender = needsScoping && !shadyRenderSet.has(scopeName);
        // On first scope render, render into a fragment; this cannot be a single
        // fragment that is reused since nested renders can occur synchronously.
        const renderContainer = firstScopeRender ? document.createDocumentFragment() : container;
        render(result, renderContainer, Object.assign({ templateFactory: shadyTemplateFactory(scopeName) }, options));
        // When performing first scope render,
        // (1) We've rendered into a fragment so that there's a chance to
        // `prepareTemplateStyles` before sub-elements hit the DOM
        // (which might cause them to render based on a common pattern of
        // rendering in a custom element's `connectedCallback`);
        // (2) Scope the template with ShadyCSS one time only for this scope.
        // (3) Render the fragment into the container and make sure the
        // container knows its `part` is the one we just rendered. This ensures
        // DOM will be re-used on subsequent renders.
        if (firstScopeRender) {
            const part = parts.get(renderContainer);
            parts.delete(renderContainer);
            // ShadyCSS might have style sheets (e.g. from `prepareAdoptedCssText`)
            // that should apply to `renderContainer` even if the rendered value is
            // not a TemplateInstance. However, it will only insert scoped styles
            // into the document if `prepareTemplateStyles` has already been called
            // for the given scope name.
            const template = part.value instanceof TemplateInstance ?
                part.value.template :
                undefined;
            prepareTemplateStyles(scopeName, renderContainer, template);
            removeNodes(container, container.firstChild);
            container.appendChild(renderContainer);
            parts.set(container, part);
        }
        // After elements have hit the DOM, update styling if this is the
        // initial render to this container.
        // This is needed whenever dynamic changes are made so it would be
        // safest to do every render; however, this would regress performance
        // so we leave it up to the user to call `ShadyCSS.styleElement`
        // for dynamic changes.
        if (!hasRendered && needsScoping) {
            window.ShadyCSS.styleElement(container.host);
        }
    };

    /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
    var _a;
    /**
     * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
     * replaced at compile time by the munged name for object[property]. We cannot
     * alias this function, so we have to use a small shim that has the same
     * behavior when not compiling.
     */
    window.JSCompiler_renameProperty =
        (prop, _obj) => prop;
    const defaultConverter = {
        toAttribute(value, type) {
            switch (type) {
                case Boolean:
                    return value ? '' : null;
                case Object:
                case Array:
                    // if the value is `null` or `undefined` pass this through
                    // to allow removing/no change behavior.
                    return value == null ? value : JSON.stringify(value);
            }
            return value;
        },
        fromAttribute(value, type) {
            switch (type) {
                case Boolean:
                    return value !== null;
                case Number:
                    return value === null ? null : Number(value);
                case Object:
                case Array:
                    return JSON.parse(value);
            }
            return value;
        }
    };
    /**
     * Change function that returns true if `value` is different from `oldValue`.
     * This method is used as the default for a property's `hasChanged` function.
     */
    const notEqual = (value, old) => {
        // This ensures (old==NaN, value==NaN) always returns false
        return old !== value && (old === old || value === value);
    };
    const defaultPropertyDeclaration = {
        attribute: true,
        type: String,
        converter: defaultConverter,
        reflect: false,
        hasChanged: notEqual
    };
    const microtaskPromise = Promise.resolve(true);
    const STATE_HAS_UPDATED = 1;
    const STATE_UPDATE_REQUESTED = 1 << 2;
    const STATE_IS_REFLECTING_TO_ATTRIBUTE = 1 << 3;
    const STATE_IS_REFLECTING_TO_PROPERTY = 1 << 4;
    const STATE_HAS_CONNECTED = 1 << 5;
    /**
     * The Closure JS Compiler doesn't currently have good support for static
     * property semantics where "this" is dynamic (e.g.
     * https://github.com/google/closure-compiler/issues/3177 and others) so we use
     * this hack to bypass any rewriting by the compiler.
     */
    const finalized = 'finalized';
    /**
     * Base element class which manages element properties and attributes. When
     * properties change, the `update` method is asynchronously called. This method
     * should be supplied by subclassers to render updates as desired.
     */
    class UpdatingElement extends HTMLElement {
        constructor() {
            super();
            this._updateState = 0;
            this._instanceProperties = undefined;
            this._updatePromise = microtaskPromise;
            this._hasConnectedResolver = undefined;
            /**
             * Map with keys for any properties that have changed since the last
             * update cycle with previous values.
             */
            this._changedProperties = new Map();
            /**
             * Map with keys of properties that should be reflected when updated.
             */
            this._reflectingProperties = undefined;
            this.initialize();
        }
        /**
         * Returns a list of attributes corresponding to the registered properties.
         * @nocollapse
         */
        static get observedAttributes() {
            // note: piggy backing on this to ensure we're finalized.
            this.finalize();
            const attributes = [];
            // Use forEach so this works even if for/of loops are compiled to for loops
            // expecting arrays
            this._classProperties.forEach((v, p) => {
                const attr = this._attributeNameForProperty(p, v);
                if (attr !== undefined) {
                    this._attributeToPropertyMap.set(attr, p);
                    attributes.push(attr);
                }
            });
            return attributes;
        }
        /**
         * Ensures the private `_classProperties` property metadata is created.
         * In addition to `finalize` this is also called in `createProperty` to
         * ensure the `@property` decorator can add property metadata.
         */
        /** @nocollapse */
        static _ensureClassProperties() {
            // ensure private storage for property declarations.
            if (!this.hasOwnProperty(JSCompiler_renameProperty('_classProperties', this))) {
                this._classProperties = new Map();
                // NOTE: Workaround IE11 not supporting Map constructor argument.
                const superProperties = Object.getPrototypeOf(this)._classProperties;
                if (superProperties !== undefined) {
                    superProperties.forEach((v, k) => this._classProperties.set(k, v));
                }
            }
        }
        /**
         * Creates a property accessor on the element prototype if one does not exist.
         * The property setter calls the property's `hasChanged` property option
         * or uses a strict identity check to determine whether or not to request
         * an update.
         * @nocollapse
         */
        static createProperty(name, options = defaultPropertyDeclaration) {
            // Note, since this can be called by the `@property` decorator which
            // is called before `finalize`, we ensure storage exists for property
            // metadata.
            this._ensureClassProperties();
            this._classProperties.set(name, options);
            // Do not generate an accessor if the prototype already has one, since
            // it would be lost otherwise and that would never be the user's intention;
            // Instead, we expect users to call `requestUpdate` themselves from
            // user-defined accessors. Note that if the super has an accessor we will
            // still overwrite it
            if (options.noAccessor || this.prototype.hasOwnProperty(name)) {
                return;
            }
            const key = typeof name === 'symbol' ? Symbol() : `__${name}`;
            Object.defineProperty(this.prototype, name, {
                // tslint:disable-next-line:no-any no symbol in index
                get() {
                    return this[key];
                },
                set(value) {
                    const oldValue = this[name];
                    this[key] = value;
                    this._requestUpdate(name, oldValue);
                },
                configurable: true,
                enumerable: true
            });
        }
        /**
         * Creates property accessors for registered properties and ensures
         * any superclasses are also finalized.
         * @nocollapse
         */
        static finalize() {
            // finalize any superclasses
            const superCtor = Object.getPrototypeOf(this);
            if (!superCtor.hasOwnProperty(finalized)) {
                superCtor.finalize();
            }
            this[finalized] = true;
            this._ensureClassProperties();
            // initialize Map populated in observedAttributes
            this._attributeToPropertyMap = new Map();
            // make any properties
            // Note, only process "own" properties since this element will inherit
            // any properties defined on the superClass, and finalization ensures
            // the entire prototype chain is finalized.
            if (this.hasOwnProperty(JSCompiler_renameProperty('properties', this))) {
                const props = this.properties;
                // support symbols in properties (IE11 does not support this)
                const propKeys = [
                    ...Object.getOwnPropertyNames(props),
                    ...(typeof Object.getOwnPropertySymbols === 'function') ?
                        Object.getOwnPropertySymbols(props) :
                        []
                ];
                // This for/of is ok because propKeys is an array
                for (const p of propKeys) {
                    // note, use of `any` is due to TypeSript lack of support for symbol in
                    // index types
                    // tslint:disable-next-line:no-any no symbol in index
                    this.createProperty(p, props[p]);
                }
            }
        }
        /**
         * Returns the property name for the given attribute `name`.
         * @nocollapse
         */
        static _attributeNameForProperty(name, options) {
            const attribute = options.attribute;
            return attribute === false ?
                undefined :
                (typeof attribute === 'string' ?
                    attribute :
                    (typeof name === 'string' ? name.toLowerCase() : undefined));
        }
        /**
         * Returns true if a property should request an update.
         * Called when a property value is set and uses the `hasChanged`
         * option for the property if present or a strict identity check.
         * @nocollapse
         */
        static _valueHasChanged(value, old, hasChanged = notEqual) {
            return hasChanged(value, old);
        }
        /**
         * Returns the property value for the given attribute value.
         * Called via the `attributeChangedCallback` and uses the property's
         * `converter` or `converter.fromAttribute` property option.
         * @nocollapse
         */
        static _propertyValueFromAttribute(value, options) {
            const type = options.type;
            const converter = options.converter || defaultConverter;
            const fromAttribute = (typeof converter === 'function' ? converter : converter.fromAttribute);
            return fromAttribute ? fromAttribute(value, type) : value;
        }
        /**
         * Returns the attribute value for the given property value. If this
         * returns undefined, the property will *not* be reflected to an attribute.
         * If this returns null, the attribute will be removed, otherwise the
         * attribute will be set to the value.
         * This uses the property's `reflect` and `type.toAttribute` property options.
         * @nocollapse
         */
        static _propertyValueToAttribute(value, options) {
            if (options.reflect === undefined) {
                return;
            }
            const type = options.type;
            const converter = options.converter;
            const toAttribute = converter && converter.toAttribute ||
                defaultConverter.toAttribute;
            return toAttribute(value, type);
        }
        /**
         * Performs element initialization. By default captures any pre-set values for
         * registered properties.
         */
        initialize() {
            this._saveInstanceProperties();
            // ensures first update will be caught by an early access of
            // `updateComplete`
            this._requestUpdate();
        }
        /**
         * Fixes any properties set on the instance before upgrade time.
         * Otherwise these would shadow the accessor and break these properties.
         * The properties are stored in a Map which is played back after the
         * constructor runs. Note, on very old versions of Safari (<=9) or Chrome
         * (<=41), properties created for native platform properties like (`id` or
         * `name`) may not have default values set in the element constructor. On
         * these browsers native properties appear on instances and therefore their
         * default value will overwrite any element default (e.g. if the element sets
         * this.id = 'id' in the constructor, the 'id' will become '' since this is
         * the native platform default).
         */
        _saveInstanceProperties() {
            // Use forEach so this works even if for/of loops are compiled to for loops
            // expecting arrays
            this.constructor
                ._classProperties.forEach((_v, p) => {
                if (this.hasOwnProperty(p)) {
                    const value = this[p];
                    delete this[p];
                    if (!this._instanceProperties) {
                        this._instanceProperties = new Map();
                    }
                    this._instanceProperties.set(p, value);
                }
            });
        }
        /**
         * Applies previously saved instance properties.
         */
        _applyInstanceProperties() {
            // Use forEach so this works even if for/of loops are compiled to for loops
            // expecting arrays
            // tslint:disable-next-line:no-any
            this._instanceProperties.forEach((v, p) => this[p] = v);
            this._instanceProperties = undefined;
        }
        connectedCallback() {
            this._updateState = this._updateState | STATE_HAS_CONNECTED;
            // Ensure first connection completes an update. Updates cannot complete
            // before connection and if one is pending connection the
            // `_hasConnectionResolver` will exist. If so, resolve it to complete the
            // update, otherwise requestUpdate.
            if (this._hasConnectedResolver) {
                this._hasConnectedResolver();
                this._hasConnectedResolver = undefined;
            }
        }
        /**
         * Allows for `super.disconnectedCallback()` in extensions while
         * reserving the possibility of making non-breaking feature additions
         * when disconnecting at some point in the future.
         */
        disconnectedCallback() {
        }
        /**
         * Synchronizes property values when attributes change.
         */
        attributeChangedCallback(name, old, value) {
            if (old !== value) {
                this._attributeToProperty(name, value);
            }
        }
        _propertyToAttribute(name, value, options = defaultPropertyDeclaration) {
            const ctor = this.constructor;
            const attr = ctor._attributeNameForProperty(name, options);
            if (attr !== undefined) {
                const attrValue = ctor._propertyValueToAttribute(value, options);
                // an undefined value does not change the attribute.
                if (attrValue === undefined) {
                    return;
                }
                // Track if the property is being reflected to avoid
                // setting the property again via `attributeChangedCallback`. Note:
                // 1. this takes advantage of the fact that the callback is synchronous.
                // 2. will behave incorrectly if multiple attributes are in the reaction
                // stack at time of calling. However, since we process attributes
                // in `update` this should not be possible (or an extreme corner case
                // that we'd like to discover).
                // mark state reflecting
                this._updateState = this._updateState | STATE_IS_REFLECTING_TO_ATTRIBUTE;
                if (attrValue == null) {
                    this.removeAttribute(attr);
                }
                else {
                    this.setAttribute(attr, attrValue);
                }
                // mark state not reflecting
                this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_ATTRIBUTE;
            }
        }
        _attributeToProperty(name, value) {
            // Use tracking info to avoid deserializing attribute value if it was
            // just set from a property setter.
            if (this._updateState & STATE_IS_REFLECTING_TO_ATTRIBUTE) {
                return;
            }
            const ctor = this.constructor;
            const propName = ctor._attributeToPropertyMap.get(name);
            if (propName !== undefined) {
                const options = ctor._classProperties.get(propName) || defaultPropertyDeclaration;
                // mark state reflecting
                this._updateState = this._updateState | STATE_IS_REFLECTING_TO_PROPERTY;
                this[propName] =
                    // tslint:disable-next-line:no-any
                    ctor._propertyValueFromAttribute(value, options);
                // mark state not reflecting
                this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_PROPERTY;
            }
        }
        /**
         * This private version of `requestUpdate` does not access or return the
         * `updateComplete` promise. This promise can be overridden and is therefore
         * not free to access.
         */
        _requestUpdate(name, oldValue) {
            let shouldRequestUpdate = true;
            // If we have a property key, perform property update steps.
            if (name !== undefined) {
                const ctor = this.constructor;
                const options = ctor._classProperties.get(name) || defaultPropertyDeclaration;
                if (ctor._valueHasChanged(this[name], oldValue, options.hasChanged)) {
                    if (!this._changedProperties.has(name)) {
                        this._changedProperties.set(name, oldValue);
                    }
                    // Add to reflecting properties set.
                    // Note, it's important that every change has a chance to add the
                    // property to `_reflectingProperties`. This ensures setting
                    // attribute + property reflects correctly.
                    if (options.reflect === true &&
                        !(this._updateState & STATE_IS_REFLECTING_TO_PROPERTY)) {
                        if (this._reflectingProperties === undefined) {
                            this._reflectingProperties = new Map();
                        }
                        this._reflectingProperties.set(name, options);
                    }
                }
                else {
                    // Abort the request if the property should not be considered changed.
                    shouldRequestUpdate = false;
                }
            }
            if (!this._hasRequestedUpdate && shouldRequestUpdate) {
                this._enqueueUpdate();
            }
        }
        /**
         * Requests an update which is processed asynchronously. This should
         * be called when an element should update based on some state not triggered
         * by setting a property. In this case, pass no arguments. It should also be
         * called when manually implementing a property setter. In this case, pass the
         * property `name` and `oldValue` to ensure that any configured property
         * options are honored. Returns the `updateComplete` Promise which is resolved
         * when the update completes.
         *
         * @param name {PropertyKey} (optional) name of requesting property
         * @param oldValue {any} (optional) old value of requesting property
         * @returns {Promise} A Promise that is resolved when the update completes.
         */
        requestUpdate(name, oldValue) {
            this._requestUpdate(name, oldValue);
            return this.updateComplete;
        }
        /**
         * Sets up the element to asynchronously update.
         */
        async _enqueueUpdate() {
            // Mark state updating...
            this._updateState = this._updateState | STATE_UPDATE_REQUESTED;
            let resolve;
            let reject;
            const previousUpdatePromise = this._updatePromise;
            this._updatePromise = new Promise((res, rej) => {
                resolve = res;
                reject = rej;
            });
            try {
                // Ensure any previous update has resolved before updating.
                // This `await` also ensures that property changes are batched.
                await previousUpdatePromise;
            }
            catch (e) {
                // Ignore any previous errors. We only care that the previous cycle is
                // done. Any error should have been handled in the previous update.
            }
            // Make sure the element has connected before updating.
            if (!this._hasConnected) {
                await new Promise((res) => this._hasConnectedResolver = res);
            }
            try {
                const result = this.performUpdate();
                // If `performUpdate` returns a Promise, we await it. This is done to
                // enable coordinating updates with a scheduler. Note, the result is
                // checked to avoid delaying an additional microtask unless we need to.
                if (result != null) {
                    await result;
                }
            }
            catch (e) {
                reject(e);
            }
            resolve(!this._hasRequestedUpdate);
        }
        get _hasConnected() {
            return (this._updateState & STATE_HAS_CONNECTED);
        }
        get _hasRequestedUpdate() {
            return (this._updateState & STATE_UPDATE_REQUESTED);
        }
        get hasUpdated() {
            return (this._updateState & STATE_HAS_UPDATED);
        }
        /**
         * Performs an element update. Note, if an exception is thrown during the
         * update, `firstUpdated` and `updated` will not be called.
         *
         * You can override this method to change the timing of updates. If this
         * method is overridden, `super.performUpdate()` must be called.
         *
         * For instance, to schedule updates to occur just before the next frame:
         *
         * ```
         * protected async performUpdate(): Promise<unknown> {
         *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
         *   super.performUpdate();
         * }
         * ```
         */
        performUpdate() {
            // Mixin instance properties once, if they exist.
            if (this._instanceProperties) {
                this._applyInstanceProperties();
            }
            let shouldUpdate = false;
            const changedProperties = this._changedProperties;
            try {
                shouldUpdate = this.shouldUpdate(changedProperties);
                if (shouldUpdate) {
                    this.update(changedProperties);
                }
            }
            catch (e) {
                // Prevent `firstUpdated` and `updated` from running when there's an
                // update exception.
                shouldUpdate = false;
                throw e;
            }
            finally {
                // Ensure element can accept additional updates after an exception.
                this._markUpdated();
            }
            if (shouldUpdate) {
                if (!(this._updateState & STATE_HAS_UPDATED)) {
                    this._updateState = this._updateState | STATE_HAS_UPDATED;
                    this.firstUpdated(changedProperties);
                }
                this.updated(changedProperties);
            }
        }
        _markUpdated() {
            this._changedProperties = new Map();
            this._updateState = this._updateState & ~STATE_UPDATE_REQUESTED;
        }
        /**
         * Returns a Promise that resolves when the element has completed updating.
         * The Promise value is a boolean that is `true` if the element completed the
         * update without triggering another update. The Promise result is `false` if
         * a property was set inside `updated()`. If the Promise is rejected, an
         * exception was thrown during the update.
         *
         * To await additional asynchronous work, override the `_getUpdateComplete`
         * method. For example, it is sometimes useful to await a rendered element
         * before fulfilling this Promise. To do this, first await
         * `super._getUpdateComplete()`, then any subsequent state.
         *
         * @returns {Promise} The Promise returns a boolean that indicates if the
         * update resolved without triggering another update.
         */
        get updateComplete() {
            return this._getUpdateComplete();
        }
        /**
         * Override point for the `updateComplete` promise.
         *
         * It is not safe to override the `updateComplete` getter directly due to a
         * limitation in TypeScript which means it is not possible to call a
         * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
         * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
         * This method should be overridden instead. For example:
         *
         *   class MyElement extends LitElement {
         *     async _getUpdateComplete() {
         *       await super._getUpdateComplete();
         *       await this._myChild.updateComplete;
         *     }
         *   }
         */
        _getUpdateComplete() {
            return this._updatePromise;
        }
        /**
         * Controls whether or not `update` should be called when the element requests
         * an update. By default, this method always returns `true`, but this can be
         * customized to control when to update.
         *
         * * @param _changedProperties Map of changed properties with old values
         */
        shouldUpdate(_changedProperties) {
            return true;
        }
        /**
         * Updates the element. This method reflects property values to attributes.
         * It can be overridden to render and keep updated element DOM.
         * Setting properties inside this method will *not* trigger
         * another update.
         *
         * * @param _changedProperties Map of changed properties with old values
         */
        update(_changedProperties) {
            if (this._reflectingProperties !== undefined &&
                this._reflectingProperties.size > 0) {
                // Use forEach so this works even if for/of loops are compiled to for
                // loops expecting arrays
                this._reflectingProperties.forEach((v, k) => this._propertyToAttribute(k, this[k], v));
                this._reflectingProperties = undefined;
            }
        }
        /**
         * Invoked whenever the element is updated. Implement to perform
         * post-updating tasks via DOM APIs, for example, focusing an element.
         *
         * Setting properties inside this method will trigger the element to update
         * again after this update cycle completes.
         *
         * * @param _changedProperties Map of changed properties with old values
         */
        updated(_changedProperties) {
        }
        /**
         * Invoked when the element is first updated. Implement to perform one time
         * work on the element after update.
         *
         * Setting properties inside this method will trigger the element to update
         * again after this update cycle completes.
         *
         * * @param _changedProperties Map of changed properties with old values
         */
        firstUpdated(_changedProperties) {
        }
    }
    _a = finalized;
    /**
     * Marks class as having finished creating properties.
     */
    UpdatingElement[_a] = true;

    /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
    const legacyCustomElement = (tagName, clazz) => {
        window.customElements.define(tagName, clazz);
        // Cast as any because TS doesn't recognize the return type as being a
        // subtype of the decorated class when clazz is typed as
        // `Constructor<HTMLElement>` for some reason.
        // `Constructor<HTMLElement>` is helpful to make sure the decorator is
        // applied to elements however.
        // tslint:disable-next-line:no-any
        return clazz;
    };
    const standardCustomElement = (tagName, descriptor) => {
        const { kind, elements } = descriptor;
        return {
            kind,
            elements,
            // This callback is called once the class is otherwise fully defined
            finisher(clazz) {
                window.customElements.define(tagName, clazz);
            }
        };
    };
    /**
     * Class decorator factory that defines the decorated class as a custom element.
     *
     * @param tagName the name of the custom element to define
     */
    const customElement = (tagName) => (classOrDescriptor) => (typeof classOrDescriptor === 'function') ?
        legacyCustomElement(tagName, classOrDescriptor) :
        standardCustomElement(tagName, classOrDescriptor);
    const standardProperty = (options, element) => {
        // When decorating an accessor, pass it through and add property metadata.
        // Note, the `hasOwnProperty` check in `createProperty` ensures we don't
        // stomp over the user's accessor.
        if (element.kind === 'method' && element.descriptor &&
            !('value' in element.descriptor)) {
            return Object.assign({}, element, { finisher(clazz) {
                    clazz.createProperty(element.key, options);
                } });
        }
        else {
            // createProperty() takes care of defining the property, but we still
            // must return some kind of descriptor, so return a descriptor for an
            // unused prototype field. The finisher calls createProperty().
            return {
                kind: 'field',
                key: Symbol(),
                placement: 'own',
                descriptor: {},
                // When @babel/plugin-proposal-decorators implements initializers,
                // do this instead of the initializer below. See:
                // https://github.com/babel/babel/issues/9260 extras: [
                //   {
                //     kind: 'initializer',
                //     placement: 'own',
                //     initializer: descriptor.initializer,
                //   }
                // ],
                initializer() {
                    if (typeof element.initializer === 'function') {
                        this[element.key] = element.initializer.call(this);
                    }
                },
                finisher(clazz) {
                    clazz.createProperty(element.key, options);
                }
            };
        }
    };
    const legacyProperty = (options, proto, name) => {
        proto.constructor
            .createProperty(name, options);
    };
    /**
     * A property decorator which creates a LitElement property which reflects a
     * corresponding attribute value. A `PropertyDeclaration` may optionally be
     * supplied to configure property features.
     *
     * @ExportDecoratedItems
     */
    function property(options) {
        // tslint:disable-next-line:no-any decorator
        return (protoOrDescriptor, name) => (name !== undefined) ?
            legacyProperty(options, protoOrDescriptor, name) :
            standardProperty(options, protoOrDescriptor);
    }

    /**
    @license
    Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at
    http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
    http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
    found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
    part of the polymer project is also subject to an additional IP rights grant
    found at http://polymer.github.io/PATENTS.txt
    */
    const supportsAdoptingStyleSheets = ('adoptedStyleSheets' in Document.prototype) &&
        ('replace' in CSSStyleSheet.prototype);
    const constructionToken = Symbol();
    class CSSResult {
        constructor(cssText, safeToken) {
            if (safeToken !== constructionToken) {
                throw new Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');
            }
            this.cssText = cssText;
        }
        // Note, this is a getter so that it's lazy. In practice, this means
        // stylesheets are not created until the first element instance is made.
        get styleSheet() {
            if (this._styleSheet === undefined) {
                // Note, if `adoptedStyleSheets` is supported then we assume CSSStyleSheet
                // is constructable.
                if (supportsAdoptingStyleSheets) {
                    this._styleSheet = new CSSStyleSheet();
                    this._styleSheet.replaceSync(this.cssText);
                }
                else {
                    this._styleSheet = null;
                }
            }
            return this._styleSheet;
        }
        toString() {
            return this.cssText;
        }
    }
    const textFromCSSResult = (value) => {
        if (value instanceof CSSResult) {
            return value.cssText;
        }
        else if (typeof value === 'number') {
            return value;
        }
        else {
            throw new Error(`Value passed to 'css' function must be a 'css' function result: ${value}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`);
        }
    };
    /**
     * Template tag which which can be used with LitElement's `style` property to
     * set element styles. For security reasons, only literal string values may be
     * used. To incorporate non-literal values `unsafeCSS` may be used inside a
     * template string part.
     */
    const css = (strings, ...values) => {
        const cssText = values.reduce((acc, v, idx) => acc + textFromCSSResult(v) + strings[idx + 1], strings[0]);
        return new CSSResult(cssText, constructionToken);
    };

    /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
    // IMPORTANT: do not change the property name or the assignment expression.
    // This line will be used in regexes to search for LitElement usage.
    // TODO(justinfagnani): inject version number at build time
    (window['litElementVersions'] || (window['litElementVersions'] = []))
        .push('2.2.1');
    /**
     * Minimal implementation of Array.prototype.flat
     * @param arr the array to flatten
     * @param result the accumlated result
     */
    function arrayFlat(styles, result = []) {
        for (let i = 0, length = styles.length; i < length; i++) {
            const value = styles[i];
            if (Array.isArray(value)) {
                arrayFlat(value, result);
            }
            else {
                result.push(value);
            }
        }
        return result;
    }
    /** Deeply flattens styles array. Uses native flat if available. */
    const flattenStyles = (styles) => styles.flat ? styles.flat(Infinity) : arrayFlat(styles);
    class LitElement extends UpdatingElement {
        /** @nocollapse */
        static finalize() {
            // The Closure JS Compiler does not always preserve the correct "this"
            // when calling static super methods (b/137460243), so explicitly bind.
            super.finalize.call(this);
            // Prepare styling that is stamped at first render time. Styling
            // is built from user provided `styles` or is inherited from the superclass.
            this._styles =
                this.hasOwnProperty(JSCompiler_renameProperty('styles', this)) ?
                    this._getUniqueStyles() :
                    this._styles || [];
        }
        /** @nocollapse */
        static _getUniqueStyles() {
            // Take care not to call `this.styles` multiple times since this generates
            // new CSSResults each time.
            // TODO(sorvell): Since we do not cache CSSResults by input, any
            // shared styles will generate new stylesheet objects, which is wasteful.
            // This should be addressed when a browser ships constructable
            // stylesheets.
            const userStyles = this.styles;
            const styles = [];
            if (Array.isArray(userStyles)) {
                const flatStyles = flattenStyles(userStyles);
                // As a performance optimization to avoid duplicated styling that can
                // occur especially when composing via subclassing, de-duplicate styles
                // preserving the last item in the list. The last item is kept to
                // try to preserve cascade order with the assumption that it's most
                // important that last added styles override previous styles.
                const styleSet = flatStyles.reduceRight((set, s) => {
                    set.add(s);
                    // on IE set.add does not return the set.
                    return set;
                }, new Set());
                // Array.from does not work on Set in IE
                styleSet.forEach((v) => styles.unshift(v));
            }
            else if (userStyles) {
                styles.push(userStyles);
            }
            return styles;
        }
        /**
         * Performs element initialization. By default this calls `createRenderRoot`
         * to create the element `renderRoot` node and captures any pre-set values for
         * registered properties.
         */
        initialize() {
            super.initialize();
            this.renderRoot =
                this.createRenderRoot();
            // Note, if renderRoot is not a shadowRoot, styles would/could apply to the
            // element's getRootNode(). While this could be done, we're choosing not to
            // support this now since it would require different logic around de-duping.
            if (window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot) {
                this.adoptStyles();
            }
        }
        /**
         * Returns the node into which the element should render and by default
         * creates and returns an open shadowRoot. Implement to customize where the
         * element's DOM is rendered. For example, to render into the element's
         * childNodes, return `this`.
         * @returns {Element|DocumentFragment} Returns a node into which to render.
         */
        createRenderRoot() {
            return this.attachShadow({ mode: 'open' });
        }
        /**
         * Applies styling to the element shadowRoot using the `static get styles`
         * property. Styling will apply using `shadowRoot.adoptedStyleSheets` where
         * available and will fallback otherwise. When Shadow DOM is polyfilled,
         * ShadyCSS scopes styles and adds them to the document. When Shadow DOM
         * is available but `adoptedStyleSheets` is not, styles are appended to the
         * end of the `shadowRoot` to [mimic spec
         * behavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).
         */
        adoptStyles() {
            const styles = this.constructor._styles;
            if (styles.length === 0) {
                return;
            }
            // There are three separate cases here based on Shadow DOM support.
            // (1) shadowRoot polyfilled: use ShadyCSS
            // (2) shadowRoot.adoptedStyleSheets available: use it.
            // (3) shadowRoot.adoptedStyleSheets polyfilled: append styles after
            // rendering
            if (window.ShadyCSS !== undefined && !window.ShadyCSS.nativeShadow) {
                window.ShadyCSS.ScopingShim.prepareAdoptedCssText(styles.map((s) => s.cssText), this.localName);
            }
            else if (supportsAdoptingStyleSheets) {
                this.renderRoot.adoptedStyleSheets =
                    styles.map((s) => s.styleSheet);
            }
            else {
                // This must be done after rendering so the actual style insertion is done
                // in `update`.
                this._needsShimAdoptedStyleSheets = true;
            }
        }
        connectedCallback() {
            super.connectedCallback();
            // Note, first update/render handles styleElement so we only call this if
            // connected after first update.
            if (this.hasUpdated && window.ShadyCSS !== undefined) {
                window.ShadyCSS.styleElement(this);
            }
        }
        /**
         * Updates the element. This method reflects property values to attributes
         * and calls `render` to render DOM via lit-html. Setting properties inside
         * this method will *not* trigger another update.
         * * @param _changedProperties Map of changed properties with old values
         */
        update(changedProperties) {
            super.update(changedProperties);
            const templateResult = this.render();
            if (templateResult instanceof TemplateResult) {
                this.constructor
                    .render(templateResult, this.renderRoot, { scopeName: this.localName, eventContext: this });
            }
            // When native Shadow DOM is used but adoptedStyles are not supported,
            // insert styling after rendering to ensure adoptedStyles have highest
            // priority.
            if (this._needsShimAdoptedStyleSheets) {
                this._needsShimAdoptedStyleSheets = false;
                this.constructor._styles.forEach((s) => {
                    const style = document.createElement('style');
                    style.textContent = s.cssText;
                    this.renderRoot.appendChild(style);
                });
            }
        }
        /**
         * Invoked on each update to perform rendering tasks. This method must return
         * a lit-html TemplateResult. Setting properties inside this method will *not*
         * trigger the element to update.
         */
        render() {
        }
    }
    /**
     * Ensure this class is marked as `finalized` as an optimization ensuring
     * it will not needlessly try to `finalize`.
     *
     * Note this property name is a string to prevent breaking Closure JS Compiler
     * optimizations. See updating-element.ts for more information.
     */
    LitElement['finalized'] = true;
    /**
     * Render method used to render the lit-html TemplateResult to the element's
     * DOM.
     * @param {TemplateResult} Template to render.
     * @param {Element|DocumentFragment} Node into which to render.
     * @param {String} Element name.
     * @nocollapse
     */
    LitElement.render = render$1;

    /**
     * @license
     * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
    /**
     * Stores the ClassInfo object applied to a given AttributePart.
     * Used to unset existing values when a new ClassInfo object is applied.
     */
    const classMapCache = new WeakMap();
    /**
     * A directive that applies CSS classes. This must be used in the `class`
     * attribute and must be the only part used in the attribute. It takes each
     * property in the `classInfo` argument and adds the property name to the
     * element's `classList` if the property value is truthy; if the property value
     * is falsey, the property name is removed from the element's `classList`. For
     * example
     * `{foo: bar}` applies the class `foo` if the value of `bar` is truthy.
     * @param classInfo {ClassInfo}
     */
    const classMap = directive((classInfo) => (part) => {
        if (!(part instanceof AttributePart) || (part instanceof PropertyPart) ||
            part.committer.name !== 'class' || part.committer.parts.length > 1) {
            throw new Error('The `classMap` directive must be used in the `class` attribute ' +
                'and must be the only part in the attribute.');
        }
        const { committer } = part;
        const { element } = committer;
        // handle static classes
        if (!classMapCache.has(part)) {
            element.className = committer.strings.join(' ');
        }
        const { classList } = element;
        // remove old classes that no longer apply
        const oldInfo = classMapCache.get(part);
        for (const name in oldInfo) {
            if (!(name in classInfo)) {
                classList.remove(name);
            }
        }
        // add new classes
        for (const name in classInfo) {
            const value = classInfo[name];
            if (!oldInfo || value !== oldInfo[name]) {
                // We explicitly want a loose truthy check here because
                // it seems more convenient that '' and 0 are skipped.
                const method = value ? 'add' : 'remove';
                classList[method](name);
            }
        }
        classMapCache.set(part, classInfo);
    });

    /**
     * pitchClasses provides the chromatic scale symbols exported as a list:
     * 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'
     * @type {Array}
     */
    const pitchClasses = Object.freeze([
        "C",
        "C#",
        "D",
        "D#",
        "E",
        "F",
        "F#",
        "G",
        "G#",
        "A",
        "A#",
        "B",
    ]);
    /**
     * Computes the frequency value of the given midi note
     * with custom tuning
     * @param {number} midiValue - Midi value (0 to 127) of the note
     * @param {number} tuning - The frequency associated to midi value 69 (A4)
     * @returns {number|function} The computed frequency or a computing function
     */
    function midiToFrequency(midiValue, tuning = 440) {
        if (midiValue >= 0 && midiValue <= 127) {
            return tuning * 2 ** ((midiValue - 69) / 12);
        }
        return null;
    }
    /**
     * Computes the midiValue value of the given note in the given octave
     * @param {string} pitchClass - Note in scale (english notation)
     * @param {number} octave - Octave value for note
     */
    function noteToMidi(pitchClass, octave) {
        return (octave + 1) * 12 + pitchClasses.indexOf(pitchClass);
    }
    /**
     * Computes the pitch class as a number from 0 to 11
     * @param midiValue - midi value for note
     * @returns {number}
     */
    function computePitchClassIndex(midiValue) {
        return (midiValue - 12 * 2) % 12;
    }
    /**
     *
     * @param midiValue - midi value for note
     * @returns {number} the octave in which the pitchClass for this midi value lies
     */
    function computeOctave(midiValue) {
        return (midiValue - computePitchClassIndex(midiValue) - 12) / 12;
    }
    /**
     * Computes the frequency value of the given note in the given octave
     * @param {string} pitchClass - Note in scale (english notation)
     * @param {number} octave - Octave value for note
     * @param {number} tuning - The frequency associated to midi value 69 (A4)
     */
    function symbolToFrequency(pitchClass, octave, tuning = 440) {
        return midiToFrequency(noteToMidi(pitchClass, octave), tuning);
    }
    /**
     * Pre-computes all the notes within a given octave
     * @param {number} octave - Octave value for note
     * @param {number} tuning - The frequency associated to midi value 69 (A4)
     */
    function createNotes(octave, tuning = 440) {
        return pitchClasses
            .map((pitchClass) => {
            return {
                pitchClass,
                octave,
                frequency: symbolToFrequency(pitchClass, octave, tuning),
                midiValue: noteToMidi(pitchClass, octave),
            };
        })
            .filter((note) => note.frequency !== null);
    }
    /**
     * Pre-computes all the octaves within the midi notes range [16:127]
     * @param {number} tuning - The frequency associated to midi value 69 (A4)
     */
    function createMidiOctaves(tuning = 440) {
        const octaves = [];
        for (let i = 0; i < 10; ++i) {
            octaves.push(createNotes(i, tuning));
        }
        return octaves;
    }

    function onMidiSuccess(midiAccess, midiMessageHandler) {
        for (const input of midiAccess.inputs.values()) {
            input.onmidimessage = midiMessageHandler;
        }
    }
    async function createMidiController(midiMessageHandler) {
        const nav = navigator;
        if (!nav.requestMIDIAccess) {
            return null;
        }
        try {
            const midiAccess = await nav.requestMIDIAccess();
            onMidiSuccess(midiAccess, midiMessageHandler);
        }
        catch (error) {
            return null;
        }
    }

    const Status = Object.freeze({
      NOTE_OFF: 0x08,
      NOTE_ON: 0x09,
      NOTE_AFTER_TOUCH: 0x0a,
      CONTROL_CHANGE: 0x0b,
      PROGRAM_CHANGE: 0x0c,
      CHANNEL_AFTER_TOUCH: 0x0d,
      PITCH_BEND: 0x0e,
      SYSEX_MESSAGE: 0xf0,
    });

    function isNote(message) {
      return (
        message &&
        (message.status === Status.NOTE_ON || message.status === Status.NOTE_OFF)
      );
    }

    function isControlChange(message) {
      return message && message.status === Status.CONTROL_CHANGE;
    }

    function Note(data, channel) {
      return {
        data: {
          value: data.getUint8(1),
          velocity: data.getUint8(2),
          channel,
        },
      };
    }

    function NoteOn(data, channel) {
      return {
        ...Note(data, channel),
        status: Status.NOTE_ON,
      };
    }

    function NoteOff(data, channel) {
      return {
        ...Note(data, channel),
        status: Status.NOTE_OFF,
      };
    }

    function NoteAfterTouch(data, channel) {
      return {
        status: Status.NOTE_AFTER_TOUCH,
        data: {
          note: data.getUint8(0),
          value: data.getUint8(1),
          channel,
        },
      };
    }

    function ControlChange(data, channel) {
      return {
        status: Status.CONTROL_CHANGE,
        data: {
          control: data.getUint8(1),
          value: data.getUint8(2),
          channel,
        },
      };
    }

    function ProgramChange(data, channel) {
      return {
        status: Status.PROGRAM_CHANGE,
        data: {
          value: data.getUint8(0),
          channel,
        },
      };
    }

    function ChannelAfterTouch(data, channel) {
      return {
        status: Status.CHANNEL_AFTER_TOUCH,
        data: {
          value: data.getUint8(offset),
          channel,
        },
      };
    }

    function PitchBend(data, channel) {
      return {
        // FIXME (check spec. )
        status: Status.PITCH_BEND,
        b1: data.getUint8(0),
        b2: data.getUint8(offset),
        channel,
      };
    }

    function MidiMessage(data, offset = 0) {
      /* eslint-disable no-param-reassign */
      const status = data.getUint8(offset) >> 4;
      const channel = (data.getUint8(offset) & 0xf) + 1;

      switch (status) {
        case Status.NOTE_ON:
          return NoteOn(data, channel);
        case Status.NOTE_OFF:
          return NoteOff(data, channel);
        case Status.NOTE_AFTER_TOUCH:
          return NoteAfterTouch(data, channel);
        case Status.CONTROL_CHANGE:
          return ControlChange(data, channel);
        case Status.PROGRAM_CHANGE:
          return ProgramChange(data, channel);
        case Status.CHANNEL_AFTER_TOUCH:
          return ChannelAfterTouch(data, channel);
        case Status.PITCH_BEND:
          return PitchBend(data, channel);
        // ignore unknown running status
      }
    }

    const octaves = createMidiOctaves(440).map(mapKeys);
    function mapKeys(octave) {
        return octave.map((note) => {
            const isSharp = note.pitchClass.endsWith("#");
            const pitch = isSharp
                ? note.pitchClass.replace("#", "--sharp")
                : note.pitchClass;
            return Object.assign(Object.assign({}, note), { classes: {
                    [pitch]: true,
                    "key--sharp": isSharp,
                    "key--whole": !isSharp,
                    key: true,
                } });
        });
    }
    let Keys = class Keys extends LitElement {
        constructor() {
            super(...arguments);
            this.lowerKey = 48;
            this.higherKey = 59;
            this.pressedKeys = new Set();
            this.midiChannel = 1;
            this.mouseControlledKey = null;
        }
        get octaves() {
            return octaves.slice(computeOctave(this.lowerKey), computeOctave(this.higherKey) + 1);
        }
        async connectedCallback() {
            super.connectedCallback();
            this.registerMouseUpHandler();
            await this.registerMidiHandler();
        }
        registerMouseUpHandler() {
            document.addEventListener("mouseup", this.mouseUp.bind(this));
        }
        async registerMidiHandler() {
            await createMidiController(this.onMidiMessage.bind(this));
        }
        mouseUp() {
            if (!!this.mouseControlledKey) {
                this.keyOff(this.mouseControlledKey);
                this.mouseControlledKey = null;
            }
        }
        mouseDown(key) {
            return async (event) => {
                if (event.button !== 0) {
                    return;
                }
                this.mouseControlledKey = key;
                await this.keyOn(key);
            };
        }
        mouseEnter(key) {
            return async () => {
                if (!!this.mouseControlledKey) {
                    await this.keyOff(this.mouseControlledKey);
                    this.mouseControlledKey = key;
                    await this.keyOn(key);
                }
            };
        }
        findKey(midiValue) {
            return octaves[computeOctave(midiValue)][computePitchClassIndex(midiValue)];
        }
        async onMidiMessage(message) {
            const midiMessage = MidiMessage(new DataView(message.data.buffer));
            if (!isNote(midiMessage)) {
                return;
            }
            if (midiMessage.data.channel !== this.midiChannel) {
                return;
            }
            const key = this.findKey(midiMessage.data.value);
            if (!key) {
                return;
            }
            if (midiMessage.status === Status.NOTE_ON) {
                return await this.keyOn(key);
            }
            return await this.keyOff(key);
        }
        async keyOn(key) {
            this.pressedKeys.add(key);
            this.dispatchEvent(new CustomEvent("keyOn", {
                detail: Object.assign(Object.assign({}, key), { channel: this.midiChannel }),
            }));
            await this.requestUpdate();
        }
        async keyOff(key) {
            this.pressedKeys.delete(key);
            this.dispatchEvent(new CustomEvent("keyOff", {
                detail: Object.assign(Object.assign({}, key), { channel: this.midiChannel }),
            }));
            await this.requestUpdate();
        }
        createOctaveElement(keys) {
            return html `
      <div class="octave">
        ${keys.map(this.createKeyElement.bind(this))}
      </div>
    `;
        }
        createKeyElement(key) {
            return html `
      <div
        @mousedown=${this.mouseDown(key)}
        @mouseenter=${this.mouseEnter(key)}
        id="${key.midiValue}"
        class="${this.computeKeyClasses(key)}"
      ></div>
    `;
        }
        computeKeyClasses(key) {
            return classMap(Object.assign(Object.assign({}, key.classes), { "key--pressed": this.pressedKeys.has(key) }));
        }
        render() {
            return html `
      <div class="octaves">
        ${this.octaves.map(this.createOctaveElement.bind(this))}
      </div>
    `;
        }
        static get styles() {
            // noinspection CssUnresolvedCustomProperty
            return css `
      :host {
        user-select: none;
        outline: none;
      }

      .octaves {
        display: flex;
        justify-content: flex-start;
        height: var(--key-height, 150px);
      }

      .octave {
        flex-grow: 1;

        display: grid;
        grid-template-columns: repeat(84, 1fr);
        margin-left: -7px;
      }

      .key {
        border: 1px solid white;
      }

      .key--sharp {
        background-color: var(--key-sharp-color, #999);
        z-index: 1;
        height: 60%;
      }

      .key--whole {
        background-color: var(--key-whole-color, #ccc);
        height: 100%;
      }

      .key--pressed {
        filter: brightness(2);
      }

      .C {
        grid-row: 1;
        grid-column: 1 / span 12;
      }

      .C--sharp {
        grid-row: 1;
        grid-column: 8 / span 8;
      }

      .D {
        grid-row: 1;
        grid-column: 12 / span 12;
      }

      .D--sharp {
        grid-row: 1;
        grid-column: 20 / span 8;
      }

      .E {
        grid-row: 1;
        grid-column: 24 / span 12;
      }

      .F {
        grid-row: 1;
        grid-column: 36 / span 12;
      }

      .F--sharp {
        grid-row: 1;
        grid-column: 44 / span 8;
      }

      .G {
        grid-row: 1;
        grid-column: 48 / span 12;
      }

      .G--sharp {
        grid-row: 1;
        grid-column: 56 / span 8;
      }

      .A {
        grid-row: 1;
        grid-column: 60 / span 12;
      }

      .A--sharp {
        grid-row: 1;
        grid-column: 68 / span 8;
      }

      .B {
        grid-row: 1;
        grid-column: 72 / span 12;
      }

      .key--white {
        fill: var(--control-background-color, #ccc);
        stroke: var(--primary-color, #ccc);
      }

      .key--black {
        fill: var(--primary-color, #ccc);
      }
    `;
        }
    };
    __decorate([
        property({ type: Number }),
        __metadata("design:type", Object)
    ], Keys.prototype, "lowerKey", void 0);
    __decorate([
        property({ type: Number }),
        __metadata("design:type", Object)
    ], Keys.prototype, "higherKey", void 0);
    __decorate([
        property({ type: Object }),
        __metadata("design:type", Object)
    ], Keys.prototype, "pressedKeys", void 0);
    __decorate([
        property({ type: Number }),
        __metadata("design:type", Object)
    ], Keys.prototype, "midiChannel", void 0);
    Keys = __decorate([
        customElement("keys-element")
    ], Keys);

    let Visualizer = class Visualizer extends LitElement {
        constructor() {
            super(...arguments);
            this.width = 1024;
            this.height = 512;
        }
        firstUpdated() {
            this.canvas = this.shadowRoot.getElementById("visualizer");
            this.canvasContext = this.canvas.getContext("2d");
            this.draw();
        }
        connectedCallback() {
            super.connectedCallback();
            this.analyser.fftSize = 2048 * 2;
            this.buffer = new Uint8Array(this.analyser.fftSize);
        }
        draw() {
            if (!this.analyser) {
                return;
            }
            this.drawOscilloscope();
        }
        drawOscilloscope() {
            this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
            const sliceWidth = (this.canvas.width / this.analyser.fftSize) * 4;
            this.analyser.getByteTimeDomainData(this.buffer);
            this.canvasContext.beginPath();
            this.buffer.forEach((v, i) => {
                const y = (v / 128) * (this.canvas.height / 2);
                const x = i * sliceWidth;
                this.canvasContext.lineTo(x, y);
            });
            this.canvasContext.lineWidth = 2;
            this.canvasContext.strokeStyle = "#00954a";
            this.canvasContext.stroke();
            requestAnimationFrame(this.drawOscilloscope.bind(this));
        }
        render() {
            return html `
      <canvas
        class="test"
        id="visualizer"
        width=${this.width}
        height=${this.height}
      ></canvas>
    `;
        }
    };
    __decorate([
        property({ attribute: false }),
        __metadata("design:type", Object)
    ], Visualizer.prototype, "analyser", void 0);
    __decorate([
        property({ type: Number }),
        __metadata("design:type", Object)
    ], Visualizer.prototype, "width", void 0);
    __decorate([
        property({ type: Number }),
        __metadata("design:type", Object)
    ], Visualizer.prototype, "height", void 0);
    Visualizer = __decorate([
        customElement("visualizer-element")
    ], Visualizer);

    var DispatcherEvent;
    (function (DispatcherEvent) {
        DispatcherEvent["SHOULD_MIDI_LEARN"] = "SHOULD_MIDI_LEARN";
        DispatcherEvent["NEW_MIDI_LEARNER"] = "NEW_MIDI_LEARNER";
    })(DispatcherEvent || (DispatcherEvent = {}));
    class Dispatcher extends EventTarget {
        dispatch(actionId, detail) {
            this.dispatchEvent(new CustomEvent(actionId, { detail }));
        }
        subscribe(actionId, callback) {
            this.addEventListener(actionId, callback);
        }
    }
    const GlobalDispatcher = new Dispatcher();

    function scale(value, range, newRange) {
        return Math.round(newRange.min +
            ((value - range.min) * (newRange.max - newRange.min)) /
                (range.max - range.min));
    }
    const ANGLE_RANGE = {
        min: -135,
        max: 135,
    };
    const MIDI_RANGE = {
        min: 0,
        max: 127,
    };
    let Knob = class Knob extends LitElement {
        constructor() {
            super(...arguments);
            this.range = MIDI_RANGE;
            this.value = 64;
            this.step = 1;
            this.angle = 0;
            this.shouldMidiLearn = false;
            this.isMidiLearning = false;
        }
        async connectedCallback() {
            super.connectedCallback();
            this.updateAngle();
            await this.registerMidiHandler();
            await this.registerDispatchHandlers();
        }
        async registerDispatchHandlers() {
            GlobalDispatcher.subscribe(DispatcherEvent.NEW_MIDI_LEARNER, (event) => {
                if (event.detail.value === this) {
                    this.isMidiLearning = true;
                    this.requestUpdate();
                }
                //this.shouldMidiLearn = false;
            });
            GlobalDispatcher.subscribe(DispatcherEvent.SHOULD_MIDI_LEARN, (event) => {
                this.shouldMidiLearn = event.detail.value;
                if (!this.shouldMidiLearn) {
                    this.isMidiLearning = false;
                    this.requestUpdate();
                }
            });
        }
        async registerMidiHandler() {
            await createMidiController(this.onMidiMessage.bind(this));
        }
        toggleActive() {
            const drag = (event) => {
                event.preventDefault();
                this.updateValue(event.movementY);
            };
            const destroy = () => {
                document.removeEventListener("mouseup", destroy);
                document.removeEventListener("mousemove", drag);
            };
            document.addEventListener("mousemove", drag);
            document.addEventListener("mouseup", destroy);
        }
        toggleMidiLearn() {
            if (this.shouldMidiLearn) {
                GlobalDispatcher.dispatch(DispatcherEvent.NEW_MIDI_LEARNER, {
                    value: this,
                });
            }
        }
        get midiLearnMessage() {
            return this.shouldMidiLearn ? "MIDI" : "LEARNING";
        }
        onWheel(event) {
            event.preventDefault();
            this.updateValue(this.computeStep(event.deltaY, event.altKey ? 0.25 : 1));
        }
        async onMidiMessage(message) {
            const midiMessage = MidiMessage(new DataView(message.data.buffer));
            if (isControlChange(midiMessage)) {
                if (this.isMidiLearning) {
                    this.midiControl = midiMessage.data.control;
                    this.isMidiLearning = false;
                }
                if (this.midiControl === midiMessage.data.control) {
                    this.value = midiMessage.data.value;
                }
            }
        }
        updateAngle() {
            this.angle = scale(this.value, this.range, ANGLE_RANGE);
        }
        updateValue(increment) {
            if (increment < 0 && this.value > this.range.min) {
                this.value += increment;
            }
            if (increment > 0 && this.value < this.range.max) {
                this.value += increment;
            }
        }
        computeStep(increment, multiplier = 1) {
            if (increment < 0 && this.value > this.range.min) {
                this.value -= this.step * multiplier;
            }
            if (increment > 0 && this.value < this.range.max) {
                this.value += this.step * multiplier;
            }
        }
        updated(changedProperties) {
            if (changedProperties.get("value")) {
                this.updateAngle();
                this.dispatchEvent(new CustomEvent("change", { detail: { value: this.value } }));
            }
        }
        computeMidiLearnClasses() {
            return classMap({
                "should-learn": this.shouldMidiLearn,
                "is-learning": this.isMidiLearning,
            });
        }
        render() {
            return html `
      <div
        class="knob-wrapper"
        class="knob-wrapper"
        @click="${this.toggleMidiLearn}"
      >
        <svg
          class="knob"
          shape-rendering="geometricPrecision"
          version="1.1"
          viewBox="0 0 500 500.00012"
          @mousedown="${this.toggleActive}"
          @wheel="${this.onWheel}"
        >
          <circle class="knob__background" r="250" cy="250" cx="250" />

          <g transform="rotate(${this.angle}, 250, 250)">
            <path
              class="knob__handle"
              d="M 249.52539,5.6313593e-5 A 250,250 0 0 0 
                    206.31836,3.8477125 60,60 0 0 1 146.44141,60.005915 
                    60,60 0 0 1 106.82227,45.062556 250,250 0 0 0 
                    45.056641,106.83209 60,60 0 0 1 60,146.45318 60,60 
                    0 0 1 3.84375,206.33014 250,250 0 0 0 0,250.00006 
                    250,250 0 0 0 3.8457031,293.6817 60,60 0 0 1 60.005859,353.55865 
                    60,60 0 0 1 45.0625,393.17779 a 250,250 0 0 0 61.76953,61.76563 
                    60,60 0 0 1 39.62109,-14.94336 60,60 0 0 1 59.87696,56.15625 250,
                    250 0 0 0 43.66992,3.84375 250,250 0 0 0 43.68164,-3.8457 60,60 
                    0 0 1 59.87695,-56.16016 60,60 0 0 1 39.61914,14.94336 250,250 
                    0 0 0 61.76563,-61.76953 A 60,60 0 0 1 440,353.54694 60,60 0 0 1 
                    496.15625,293.66998 250,250 0 0 0 500,250.00006 250,250 0 0 0 
                    496.1543,206.31842 60,60 0 0 1 439.99414,146.44147 60,60 0 0 1 
                    454.9375,106.82233 250,250 0 0 0 393.41992,45.232478 60,60 0 0 1 
                    354,60.000056 60,60 0 0 1 294.12891,3.9258375 250,250 0 0 0 
                    250,5.6313593e-5 a 250,250 0 0 0 -0.47461,0 z"
            />

            <path
              class="knob__cursor"
              id="path837-1"
              d="M 249.37207,1.108327e-4 A 250,273.78195 0 0 0 
                    244.34472,0.06636606 V 53.60947 h 11.31055 V 0.07497377 a 
                    250,273.78195 0 0 0 -5.80859,-0.07490674242 250,273.78195 
                    0 0 0 -0.47461,0 z"
            />

            <circle class="knob__top" r="150" cy="250" cx="250" />
          </g>
        </svg>
        <div
          class="midi-learn top-left-corner ${this.computeMidiLearnClasses()}"
        ></div>
        <div
          class="midi-learn top-right-corner ${this.computeMidiLearnClasses()}"
        ></div>
        <div
          class="midi-learn bottom-right-corner ${this.computeMidiLearnClasses()}"
        ></div>
        <div
          class="midi-learn bottom-left-corner ${this.computeMidiLearnClasses()}"
        ></div>
        <div class="midi-learn-label ${this.computeMidiLearnClasses()}">
          ${this.midiLearnMessage}
        </div>
        <div class="label">${this.label}</div>
      </div>
    `;
        }
        static get styles() {
            // noinspection CssUnresolvedCustomProperty
            return css `
      :host {
        user-select: none;
        outline: none;
      }

      .knob-wrapper {
        position: relative;
        max-width: var(--knob-size, 100px);
      }

      .knob {
        height: var(--knob-size, 100px);
        width: var(--knob-size, 100px);
        cursor: pointer;
      }

      .knob__background {
        fill: transparent;
      }

      .knob__handle {
        fill: var(--control-handle-color, #ccc);
      }

      .knob__top {
        fill: var(--control-top-color, #ccc);
      }

      .knob__cursor {
        fill: var(--control-cursor-color, #ccc);
      }

      .midi-learn {
        position: absolute;
        height: 30%;
        width: 30%;

        display: none;
      }

      .midi-learn.should-learn {
        display: block;
      }

      .midi-learn.is-learning {
        display: block;
        animation: blink 0.5s step-end infinite alternate;
      }

      .midi-learn.top-left-corner {
        top: -5px;
        left: -5px;

        border-left: 3px solid var(--control-handle-color);
        border-top: 3px solid var(--control-handle-color);
      }

      .midi-learn.top-right-corner {
        position: absolute;
        top: -5px;
        right: -5px;

        height: 33%;
        width: 33%;

        border-right: 3px solid var(--control-handle-color);
        border-top: 3px solid var(--control-handle-color);
      }

      .midi-learn.bottom-right-corner {
        position: absolute;
        bottom: -5px;
        right: -5px;

        height: 33%;
        width: 33%;

        border-right: 3px solid var(--control-handle-color);
        border-bottom: 3px solid var(--control-handle-color);
      }

      .midi-learn.bottom-left-corner {
        position: absolute;
        bottom: -5px;
        left: -5px;

        height: 33%;
        width: 33%;

        border-left: 3px solid var(--control-handle-color);
        border-bottom: 3px solid var(--control-handle-color);
      }

      .midi-learn-label {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        display: none;

        font-size: 0.5vw;
        color: var(--lighter-color);
      }

      .midi-learn-label.should-learn,
      .midi-learn-label.is-learning {
        display: flex;
        justify-content: center;
        align-items: center;

        z-index: 1;
      }

      .label {
        font-size: 0.8em;
        color: var(--lighter-color);
        display: flex;
        justify-content: center;
      }

      @keyframes blink {
        50% {
          opacity: 0;
        }
      }
    `;
        }
    };
    __decorate([
        property({ type: Object }),
        __metadata("design:type", Object)
    ], Knob.prototype, "range", void 0);
    __decorate([
        property({ type: Number }),
        __metadata("design:type", Object)
    ], Knob.prototype, "value", void 0);
    __decorate([
        property({ type: Number }),
        __metadata("design:type", Object)
    ], Knob.prototype, "step", void 0);
    __decorate([
        property({ type: Number }),
        __metadata("design:type", Object)
    ], Knob.prototype, "angle", void 0);
    __decorate([
        property({ type: Boolean }),
        __metadata("design:type", Object)
    ], Knob.prototype, "shouldMidiLearn", void 0);
    __decorate([
        property({ type: String }),
        __metadata("design:type", String)
    ], Knob.prototype, "label", void 0);
    Knob = __decorate([
        customElement("knob-element")
    ], Knob);

    let Switch = class Switch extends LitElement {
        async onChange(event) {
            this.dispatchEvent(new CustomEvent("change", {
                detail: { value: event.currentTarget.checked },
            }));
        }
        render() {
            return html `
      <label class="switch">
        <input type="checkbox" @change="${this.onChange}" />
        <span class="slider"></span>
      </label>
      <label>${this.label}</label>
    `;
        }
        static get styles() {
            // noinspection CssUnresolvedCustomProperty
            return css `
      .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
      }

      .switch input {
        opacity: 0;
        width: 0;
        height: 0;
      }

      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: var(--lighter-color, #ccc);
        transition: var(--ui-transition-time, 0.4s);
      }

      .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: var(--light-color, white);
        transition: var(--ui-transition-time, 0.4s);
      }

      input:checked + .slider {
        background-color: var(--control-handle-color, #ccc);
      }

      input:checked + .slider:before {
        background-color: white;
      }

      input:focus + .slider {
        box-shadow: 0 0 1px var(--control-handle-color, #ccc);
      }

      input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
      }

      .label {
        font-size: 0.8em;
        color: var(--lighter-color);
        display: flex;
        justify-content: center;
      }
    `;
        }
    };
    __decorate([
        property({ type: String }),
        __metadata("design:type", String)
    ], Switch.prototype, "label", void 0);
    Switch = __decorate([
        customElement("switch-element")
    ], Switch);

    let SawWaveIcon = class SawWaveIcon extends LitElement {
        render() {
            return html `
      <div class="wrapper">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewbox="0 0 15 15"
        >
          <path
            d="M1,7.499999999999998L1.9285714285714286,9.66666501861054L2.857142857142857,
                    11.833332134083884L3.7857142857142856,13.999999999999993L4.714285714285714,
                    14L5.642857142857142,11.833332134083886L6.571428571428571,9.666665018610539L7.5,
                    7.499999999999998L8.428571428571429,5.333334981389459L9.357142857142858,
                    3.1666678659161125L10.285714285714286,1.0000000000000013L11.214285714285714,
                    1L12.142857142857142,3.1666678659161125L13.071428571428571,5.333334981389459L14,
                    7.499999999999998"
            stroke-width="2"
            stroke-linecap="flat"
            fill="#000000"
            fill-opacity="0"
          ></path>
        </svg>
      </div>
    `;
        }
        static get styles() {
            return css `
      svg {
        width: 12px;
        stroke: var(--stroke-color, #000);
      }
    `;
        }
    };
    SawWaveIcon = __decorate([
        customElement("saw-wave-icon")
    ], SawWaveIcon);

    let SquareWaveIcon = class SquareWaveIcon extends LitElement {
        render() {
            return html `
      <div class="wrapper">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewbox="0 0 15 15"
        >
          <path
            d="M1,7.500000000000015L1.9285714285714286,13.998703251446551L2.857142857142857,
                    13.999999999999995L3.7857142857142856,13.996380456469218L4.714285714285714,
                    13.996380456469204L5.642857142857142,14L6.571428571428571,13.998703251446567L7.5,
                    7.500000000001059L8.428571428571429,1.0012967485535302L9.357142857142858,
                    1.000000000000089L10.285714285714286,1.003619543530807L11.214285714285714,
                    1.003619543530832L12.142857142857142,1L13.071428571428571,1.0012967485534585L14,
                    7.499999999997926"
            stroke-width="2"
            stroke-linecap="flat"
            fill-opacity="0"
          ></path>
        </svg>
      </div>
    `;
        }
        static get styles() {
            return css `
      svg {
        width: 12px;
        stroke: var(--stroke-color, #000);
      }
    `;
        }
    };
    SquareWaveIcon = __decorate([
        customElement("square-wave-icon")
    ], SquareWaveIcon);

    let SineWaveIcon = class SineWaveIcon extends LitElement {
        render() {
            return html `
      <div class="wrapper">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewbox="0 0 15 15"
        >
          <path
            d="M1,7.5L1.9285714285714286,10.392772141432088L2.857142857142857,
                    12.71259528273145L3.7857142857142856,14L4.714285714285714,14L5.642857142857142,
                    12.71259528273145L6.571428571428571,10.392772141432088L7.5,7.500000000000002L8.428571428571429,
                    4.607227858567914L9.357142857142858,2.287404717268552L10.285714285714286,1L11.214285714285714,
                    1L12.142857142857142,2.2874047172685508L13.071428571428571,4.607227858567911L14,7.499999999999998"
            stroke-width="2"
            stroke-linecap="flat"
            fill-opacity="0"
          ></path>
        </svg>
      </div>
    `;
        }
        static get styles() {
            return css `
      svg {
        width: 12px;
        stroke: var(--stroke-color, #000);
      }
    `;
        }
    };
    SineWaveIcon = __decorate([
        customElement("sine-wave-icon")
    ], SineWaveIcon);

    let TriangleWaveIcon = class TriangleWaveIcon extends LitElement {
        render() {
            return html `
      <div class="wrapper">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewbox="0 0 15 15"
        >
          <path
            d="M1,14L1.9285714285714286,12.142490562426055L2.857142857142857,
                    10.284980468772217L3.7857142857142856,8.427469360191056L4.714285714285714,
                    6.5699573422095705L5.642857142857142,4.712444949042433L6.571428571428571,
                    2.8549329289184655L7.5,1L8.428571428571429,2.854932928918461L9.357142857142858,
                    4.712444949042433L10.285714285714286,6.569957342209566L11.214285714285714,
                    8.427469360191049L12.142857142857142,10.284980468772217L13.071428571428571,
                    12.142490562426048L14,13.999999999999995"
            stroke-width="2"
            stroke-linecap="flat"
            fill-opacity="0"
          ></path>
        </svg>
      </div>
    `;
        }
        static get styles() {
            return css `
      svg {
        width: 12px;
        stroke: var(--stroke-color, #000);
        margin-left: 1px;
      }
    `;
        }
    };
    TriangleWaveIcon = __decorate([
        customElement("triangle-wave-icon")
    ], TriangleWaveIcon);

    var OscillatorMode;
    (function (OscillatorMode) {
        OscillatorMode["SINE"] = "sine";
        OscillatorMode["SQUARE"] = "square";
        OscillatorMode["SAWTOOTH"] = "sawtooth";
        OscillatorMode["TRIANGLE"] = "triangle";
    })(OscillatorMode || (OscillatorMode = {}));

    let WaveSelector = class WaveSelector extends LitElement {
        constructor() {
            super(...arguments);
            this.value = OscillatorMode.SINE;
        }
        async onSawSelect() {
            this.value = OscillatorMode.SAWTOOTH;
            this.dispatchSelect();
        }
        async onSquareSelect() {
            this.value = OscillatorMode.SQUARE;
            this.dispatchSelect();
        }
        async onSineSelect() {
            this.value = OscillatorMode.SINE;
            this.dispatchSelect();
        }
        async onTriangleSelect() {
            this.value = OscillatorMode.TRIANGLE;
            this.dispatchSelect();
        }
        dispatchSelect() {
            this.dispatchEvent(new CustomEvent("change", { detail: { value: this.value } }));
        }
        render() {
            return html `
      <div class="wave-selector">
        <button
          class="${this.computeButtonClasses(OscillatorMode.SAWTOOTH)}"
          @click=${this.onSawSelect}
        >
          <saw-wave-icon class="icon"></saw-wave-icon>
        </button>
        <button
          class="${this.computeButtonClasses(OscillatorMode.SQUARE)}"
          @click=${this.onSquareSelect}
        >
          <square-wave-icon class="icon"></square-wave-icon>
        </button>
        <button
          class="${this.computeButtonClasses(OscillatorMode.TRIANGLE)}"
          @click=${this.onTriangleSelect}
        >
          <triangle-wave-icon class="icon"></triangle-wave-icon>
        </button>
        <button
          class="${this.computeButtonClasses(OscillatorMode.SINE)}"
          @click=${this.onSineSelect}
        >
          <sine-wave-icon class="icon"></sine-wave-icon>
        </button>
      </div>
    `;
        }
        computeButtonClasses(wave) {
            return classMap({
                active: wave === this.value,
            });
        }
        static get styles() {
            // noinspection CssUnresolvedCustomProperty
            return css `
      :host {
        width: 100%;
      }

      .wave-selector {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
      }

      button {
        width: var(--button-width, 25px);
        height: var(--button-height, 25px);
        font-size: var(--button-font-size, 1.5em);

        background-color: var(--lighter-color);
        border: 1px solid #ccc;
        border-radius: 50%;
        box-shadow: 0px 1px 1px 1px 1 #ccc;
        transition: all 0.1s ease-in-out;

        display: inline-flex;
        align-items: center;

        cursor: pointer;

        --stroke-color: black;
      }

      button .icon {
        margin-top: -2px;
      }

      button:focus {
        outline: none;
      }

      button.active {
        background-color: var(--control-handle-color);
        --stroke-color: white;
        border-color: white;
      }
    `;
        }
    };
    __decorate([
        property({ type: String }),
        __metadata("design:type", Object)
    ], WaveSelector.prototype, "value", void 0);
    WaveSelector = __decorate([
        customElement("wave-selector-element")
    ], WaveSelector);

    var OscillatorEvent;
    (function (OscillatorEvent) {
        OscillatorEvent[OscillatorEvent["WAVE_FORM"] = 0] = "WAVE_FORM";
        OscillatorEvent[OscillatorEvent["SEMI_SHIFT"] = 1] = "SEMI_SHIFT";
        OscillatorEvent[OscillatorEvent["CENT_SHIFT"] = 2] = "CENT_SHIFT";
    })(OscillatorEvent || (OscillatorEvent = {}));

    let PanelWrapper = class PanelWrapper extends LitElement {
        constructor() {
            super(...arguments);
            this.label = String();
        }
        render() {
            return html `
      <div class="wrapper">
          <label>${this.label}</label>
          <div class="content">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
        }
        static get styles() {
            // noinspection CssUnresolvedCustomProperty
            return css `
      .wrapper {
        position: relative;

        width: var(--panel-wrapper-width, 100%);
        height: var(--panel-wrapper-width, 100%);

        background-color: var(--panel-wrapper-background-color, transparent);

        border-radius: 0.5rem;

        padding: 0.25em;

        display: inline-flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      label {
        display: block;
        color: var(--panel-wrapper-label-color, white);
        margin: 0.25em auto 1em auto;
        text-align: center;
        text-transform: lowercase;
      }
    `;
        }
    };
    __decorate([
        property({ type: String }),
        __metadata("design:type", Object)
    ], PanelWrapper.prototype, "label", void 0);
    PanelWrapper = __decorate([
        customElement("panel-wrapper-element")
    ], PanelWrapper);

    let Oscillator = class Oscillator extends LitElement {
        constructor() {
            super();
            this.label = "Osc";
            this.state = {
                mode: OscillatorMode.SAWTOOTH,
                semiShift: 0,
                centShift: 0,
            };
            this.shouldMidiLearn = false;
        }
        connectedCallback() {
            super.connectedCallback();
        }
        onSemiShift(event) {
            if (event.detail.value < 39 || event.detail.value > 87) {
                return;
            }
            const value = event.detail.value - 39 - 24; // mapped to [-24;24]
            this.dispatchChange(OscillatorEvent.SEMI_SHIFT, value);
        }
        get semiShiftValue() {
            return this.state.semiShift + 39 + 24;
        }
        onCentShift(event) {
            if (event.detail.value < 13 || event.detail.value > 113) {
                return;
            }
            const value = event.detail.value - 13 - 50; // mapped to [-50;50]
            this.dispatchChange(OscillatorEvent.CENT_SHIFT, value);
        }
        get centShiftValue() {
            return this.state.centShift + 13 + 50;
        }
        onWaveFormChange(event) {
            this.dispatchChange(OscillatorEvent.WAVE_FORM, event.detail.value);
        }
        dispatchChange(type, value) {
            this.dispatchEvent(new CustomEvent("change", { detail: { type, value } }));
        }
        render() {
            return html `
      <panel-wrapper-element label=${this.label}>
        <div class="oscillator-controls">
          <div class="wave-control">
            <wave-selector-element
              .value=${this.state.mode}
              @change=${this.onWaveFormChange}
            ></wave-selector-element>
          </div>
          <div class="tone-controls">
            <div class="shift-control">
              <div class="semi-shift-control">
                <knob-element
                  .value=${this.semiShiftValue}
                  @change=${this.onSemiShift}
                  .shouldMidiLearn=${this.shouldMidiLearn}
                ></knob-element>
              </div>
              <label>semi</label>
            </div>
            <div class="shift-control">
              <div class="cent-shift-control cent">
                <knob-element
                  .value=${this.centShiftValue}
                  @change=${this.onCentShift}
                  .shouldMidiLearn=${this.shouldMidiLearn}
                ></knob-element>
              </div>
              <label>cents</label>
            </div>
          </div>
        </div>
      </panel-wrapper-element>
    `;
        }
        static get styles() {
            // noinspection CssUnresolvedCustomProperty
            return css `
      :host {
        --panel-wrapper-background-color: #7a1621;
      }

      .oscillator-controls {
        position: relative;

        width: 160px;
        height: 130px;
      }

      .oscillator-controls .tone-controls {
        display: flex;
        justify-content: space-around;
        width: 100%;
        margin-top: 1em;
      }

      .oscillator-controls .tone-controls .shift-control {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .oscillator-controls .tone-controls .semi-shift-control {
        display: flex;
        flex-direction: row;
        align-items: center;

        width: 100%;
        height: 90%;

        --knob-size: 50px;
      }

      .oscillator-controls .tone-controls .cent-shift-control {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;
        height: 90%;
        --knob-size: 40px;
      }

      label {
        display: block;
        color: white;
        font-size: 0.8em;
      }
    `;
        }
    };
    __decorate([
        property({ type: String }),
        __metadata("design:type", Object)
    ], Oscillator.prototype, "label", void 0);
    __decorate([
        property({ type: Object }),
        __metadata("design:type", Object)
    ], Oscillator.prototype, "state", void 0);
    __decorate([
        property({ type: Boolean }),
        __metadata("design:type", Object)
    ], Oscillator.prototype, "shouldMidiLearn", void 0);
    Oscillator = __decorate([
        customElement("oscillator-element"),
        __metadata("design:paramtypes", [])
    ], Oscillator);

    var FilterMode;
    (function (FilterMode) {
        FilterMode["LOWPASS_PLUS"] = "LOWPASS_PLUS";
        FilterMode["LOWPASS"] = "LOWPASS";
        FilterMode["BANDPASS"] = "BANDPASS";
        FilterMode["HIGHPASS"] = "HIGHPASS";
    })(FilterMode || (FilterMode = {}));

    var FilterEvent;
    (function (FilterEvent) {
        FilterEvent[FilterEvent["MODE"] = 0] = "MODE";
        FilterEvent[FilterEvent["CUTOFF"] = 1] = "CUTOFF";
        FilterEvent[FilterEvent["RESONANCE"] = 2] = "RESONANCE";
    })(FilterEvent || (FilterEvent = {}));

    let FilterSelector = class FilterSelector extends LitElement {
        constructor() {
            super(...arguments);
            this.value = FilterMode.LOWPASS;
        }
        async onLpSelect() {
            this.value = FilterMode.LOWPASS;
            this.dispatchSelect();
        }
        async onLpPlusSelect() {
            this.value = FilterMode.LOWPASS_PLUS;
            this.dispatchSelect();
        }
        async onBpSelect() {
            this.value = FilterMode.BANDPASS;
            this.dispatchSelect();
        }
        async onHpSelect() {
            this.value = FilterMode.HIGHPASS;
            this.dispatchSelect();
        }
        dispatchSelect() {
            this.dispatchEvent(new CustomEvent("change", { detail: { value: this.value } }));
        }
        render() {
            return html `
      <div class="filter-selector">
        <button
          class="${this.computeButtonClasses(FilterMode.LOWPASS_PLUS)}"
          @click=${this.onLpPlusSelect}
        >
          L+
        </button>
        <button
          class="${this.computeButtonClasses(FilterMode.LOWPASS)}"
          @click=${this.onLpSelect}
        >
          LP
        </button>
        <button
          class="${this.computeButtonClasses(FilterMode.BANDPASS)}"
          @click=${this.onBpSelect}
        >
          BP
        </button>
        <button
          class="${this.computeButtonClasses(FilterMode.HIGHPASS)}"
          @click=${this.onHpSelect}
        >
          HP
        </button>
      </div>
    `;
        }
        computeButtonClasses(mode) {
            return classMap({
                active: mode === this.value,
            });
        }
        static get styles() {
            // noinspection CssUnresolvedCustomProperty
            return css `
      :host {
        width: 100%;
        font-size: 0.5em;
      }

      .filter-selector {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
      }

      button {
        width: var(--button-width, 25px);
        height: var(--button-height, 25px);

        font-size: var(--button-font-size, 1.5em);

        background-color: var(--lighter-color);
        border: 1px solid var(--light-color, #ccc);
        border-radius: 50%;
        box-shadow: 0px 1px 1px 1px var(--control-background-color, #ccc);
        transition: all 0.1s ease-in-out;

        display: inline-flex;
        align-items: center;

        cursor: pointer;

        color: black;
      }

      button:focus {
        outline: none;
      }

      button.active {
        background-color: var(--control-handle-color);
        color: white;
        border-color: white;
      }
    `;
        }
    };
    __decorate([
        property({ type: String }),
        __metadata("design:type", Object)
    ], FilterSelector.prototype, "value", void 0);
    FilterSelector = __decorate([
        customElement("filter-selector-element")
    ], FilterSelector);

    let Filter = class Filter extends LitElement {
        constructor() {
            super(...arguments);
            this.shouldMidiLearn = false;
            this.state = {
                mode: FilterMode.LOWPASS,
                cutoff: 0,
                resonance: 0,
            };
        }
        onCutoffChange(event) {
            this.dispatchChange(FilterEvent.CUTOFF, event.detail.value);
        }
        onResonanceChange(event) {
            this.dispatchChange(FilterEvent.RESONANCE, event.detail.value);
        }
        onTypeChange(event) {
            this.dispatchChange(FilterEvent.MODE, event.detail.value);
        }
        dispatchChange(type, value) {
            this.dispatchEvent(new CustomEvent("change", { detail: { type, value } }));
        }
        render() {
            return html `
      <panel-wrapper-element label="Filter">
        <div class="filter-controls">
          <div class="mode-control">
            <filter-selector-element
              .value=${this.state.mode}
              @change=${this.onTypeChange}
            ></filter-selector-element>
          </div>
          <div class="frequency-controls">
            <div class="frequency-control">
              <div class="cutoff-control">
                <knob-element
                  .value=${this.state.cutoff}
                  @change=${this.onCutoffChange}
                  .shouldMidiLearn="${this.shouldMidiLearn}"
                ></knob-element>
              </div>
              <label>cutoff</label>
            </div>
            <div class="frequency-control">
              <div class="resonance-control">
                <knob-element
                  .value=${this.state.resonance}
                  @change=${this.onResonanceChange}
                  .shouldMidiLearn="${this.shouldMidiLearn}"
                ></knob-element>
              </div>
              <label>reson.</label>
            </div>
          </div>
        </div>
      </panel-wrapper-element>
    `;
        }
        static get styles() {
            // noinspection CssUnresolvedCustomProperty
            return css `
      :host {
        --panel-wrapper-background-color: #334452;
      }

      .filter-controls {
        width: 160px;
        height: 130px;
      }

      .filter-controls .mode-control {
        width: 100%;
        display: block;
      }

      .filter-controls .frequency-controls {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;

        margin-top: 1em;
      }

      .frequency-controls .frequency-control {
        width: 50%;
        height: 90%;
        --knob-size: 50px;

        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .frequency-control .cutoff-control {
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      label {
        display: block;
        color: white;
        font-size: 0.8em;
      }
    `;
        }
    };
    __decorate([
        property({ type: Boolean }),
        __metadata("design:type", Object)
    ], Filter.prototype, "shouldMidiLearn", void 0);
    __decorate([
        property({ type: Object }),
        __metadata("design:type", Object)
    ], Filter.prototype, "state", void 0);
    Filter = __decorate([
        customElement("filter-element")
    ], Filter);

    var OscillatorEnvelopeEvent;
    (function (OscillatorEnvelopeEvent) {
        OscillatorEnvelopeEvent[OscillatorEnvelopeEvent["ATTACK"] = 0] = "ATTACK";
        OscillatorEnvelopeEvent[OscillatorEnvelopeEvent["DECAY"] = 1] = "DECAY";
        OscillatorEnvelopeEvent[OscillatorEnvelopeEvent["SUSTAIN"] = 2] = "SUSTAIN";
        OscillatorEnvelopeEvent[OscillatorEnvelopeEvent["RELEASE"] = 3] = "RELEASE";
    })(OscillatorEnvelopeEvent || (OscillatorEnvelopeEvent = {}));

    /**
     * @license
     * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
    /**
     * Stores the StyleInfo object applied to a given AttributePart.
     * Used to unset existing values when a new StyleInfo object is applied.
     */
    const styleMapCache = new WeakMap();
    /**
     * A directive that applies CSS properties to an element.
     *
     * `styleMap` can only be used in the `style` attribute and must be the only
     * expression in the attribute. It takes the property names in the `styleInfo`
     * object and adds the property values as CSS propertes. Property names with
     * dashes (`-`) are assumed to be valid CSS property names and set on the
     * element's style object using `setProperty()`. Names without dashes are
     * assumed to be camelCased JavaScript property names and set on the element's
     * style object using property assignment, allowing the style object to
     * translate JavaScript-style names to CSS property names.
     *
     * For example `styleMap({backgroundColor: 'red', 'border-top': '5px', '--size':
     * '0'})` sets the `background-color`, `border-top` and `--size` properties.
     *
     * @param styleInfo {StyleInfo}
     */
    const styleMap = directive((styleInfo) => (part) => {
        if (!(part instanceof AttributePart) || (part instanceof PropertyPart) ||
            part.committer.name !== 'style' || part.committer.parts.length > 1) {
            throw new Error('The `styleMap` directive must be used in the style attribute ' +
                'and must be the only part in the attribute.');
        }
        const { committer } = part;
        const { style } = committer.element;
        // Handle static styles the first time we see a Part
        if (!styleMapCache.has(part)) {
            style.cssText = committer.strings.join(' ');
        }
        // Remove old properties that no longer exist in styleInfo
        const oldInfo = styleMapCache.get(part);
        for (const name in oldInfo) {
            if (!(name in styleInfo)) {
                if (name.indexOf('-') === -1) {
                    // tslint:disable-next-line:no-any
                    style[name] = null;
                }
                else {
                    style.removeProperty(name);
                }
            }
        }
        // Add or update properties
        for (const name in styleInfo) {
            if (name.indexOf('-') === -1) {
                // tslint:disable-next-line:no-any
                style[name] = styleInfo[name];
            }
            else {
                style.setProperty(name, styleInfo[name]);
            }
        }
        styleMapCache.set(part, styleInfo);
    });

    let Fader = class Fader extends LitElement {
        constructor() {
            super(...arguments);
            this.label = String();
            this.value = 127;
        }
        toggleActive(event) {
            const host = this.shadowRoot.host;
            const parent = host.offsetParent;
            const wrapper = this.cursorWrapperElement;
            const height = wrapper.offsetHeight;
            const position = event.pageY - (parent.offsetTop + wrapper.offsetTop);
            this.updateValue((1 - position / height) * 128);
            const drag = (event) => {
                event.preventDefault();
                this.updateValue(this.value - event.movementY);
            };
            const destroy = () => {
                document.removeEventListener("mouseup", destroy);
                document.removeEventListener("mousemove", drag);
            };
            document.addEventListener("mousemove", drag);
            document.addEventListener("mouseup", destroy);
        }
        onWheel(event) {
            event.preventDefault();
            this.updateValue(this.value + event.deltaY);
        }
        updateValue(value) {
            if (value < 0 || value > 127) {
                return;
            }
            this.value = value;
            this.dispatchEvent(new CustomEvent("change", { detail: { value: this.value } }));
        }
        computeFaderCursorStyle() {
            return styleMap({
                height: `${(this.value / 127) * 100}%`,
            });
        }
        get cursorElement() {
            return html ` <div
      class="fader-cursor"
      style="${this.computeFaderCursorStyle()}"
    ></div>`;
        }
        get cursorWrapperElement() {
            return this.shadowRoot.querySelector(".cursor-wrapper");
        }
        render() {
            return html `
      <div class="fader">
        <div class="fader-wrapper">
          <div
            class="cursor-wrapper"
            @mousedown="${this.toggleActive}"
            @wheel="${this.onWheel}"
          >
            ${this.cursorElement}
          </div>
        </div>
        <label>${this.label}</label>
      </div>
    `;
        }
        static get styles() {
            // noinspection CssUnresolvedCustomProperty
            return css `
      .fader {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .fader-wrapper {
        width: var(--fader-width, 20px);
        height: var(--fader-height, 100px);
        border: 1px solid var(--lighter-color, white);
        border-radius: 2px;
        padding: 1px;
      }

      .cursor-wrapper {
        width: 100%;
        height: 100%;
        margin: 0 auto;

        position: relative;
      }

      .fader-cursor {
        display: block;
        width: 100%;

        background-color: var(--control-handle-color);

        position: absolute;
        bottom: 0;
      }

      label {
        display: block;
        color: white;
        font-size: 0.8em;
        margin-top: 0.2em;
      }
    `;
        }
    };
    __decorate([
        property({ type: String }),
        __metadata("design:type", Object)
    ], Fader.prototype, "label", void 0);
    __decorate([
        property({ type: Number }),
        __metadata("design:type", Object)
    ], Fader.prototype, "value", void 0);
    Fader = __decorate([
        customElement("fader-element")
    ], Fader);

    let Envelope = class Envelope extends LitElement {
        constructor() {
            super(...arguments);
            this.shouldMidiLearn = false;
            this.label = "Envelope";
            this.state = {
                attack: 0,
                decay: 127 / 2,
                sustain: 100,
                release: 12,
            };
        }
        onAttackChange(event) {
            this.dispatchChange(OscillatorEnvelopeEvent.ATTACK, event.detail.value);
        }
        onDecayChange(event) {
            this.dispatchChange(OscillatorEnvelopeEvent.DECAY, event.detail.value);
        }
        onSustainChange(event) {
            this.dispatchChange(OscillatorEnvelopeEvent.SUSTAIN, event.detail.value);
        }
        onReleaseChange(event) {
            this.dispatchChange(OscillatorEnvelopeEvent.RELEASE, event.detail.value);
        }
        dispatchChange(type, value) {
            this.dispatchEvent(new CustomEvent("change", { detail: { type, value } }));
        }
        render() {
            return html `
      <panel-wrapper-element .label=${this.label}>
        <div class="envelope-controls">
          <fader-element
            label="A"
            .value=${this.state.attack}
            @change=${this.onAttackChange}
          ></fader-element>
          <fader-element
            label="D"
            .value=${this.state.decay}
            @change=${this.onDecayChange}
          ></fader-element>
          <fader-element
            label="S"
            .value=${this.state.sustain}
            @change=${this.onSustainChange}
          ></fader-element>
          <fader-element
            label="R"
            .value=${this.state.release}
            @change=${this.onReleaseChange}
          ></fader-element>
        </div>
      </panel-wrapper-element>
    `;
        }
        static get styles() {
            // noinspection CssUnresolvedCustomProperty
            return css `
      :host {
        --panel-wrapper-background-color: #7a1621;
        --fader-height: 120px;
      }

      .envelope-controls {
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        width: 160px;
        height: 160px;
      }
    `;
        }
    };
    __decorate([
        property({ type: Boolean }),
        __metadata("design:type", Object)
    ], Envelope.prototype, "shouldMidiLearn", void 0);
    __decorate([
        property({ type: String }),
        __metadata("design:type", Object)
    ], Envelope.prototype, "label", void 0);
    __decorate([
        property({ type: Object }),
        __metadata("design:type", Object)
    ], Envelope.prototype, "state", void 0);
    Envelope = __decorate([
        customElement("envelope-element")
    ], Envelope);

    var FilterEnvelopeEvent;
    (function (FilterEnvelopeEvent) {
        FilterEnvelopeEvent[FilterEnvelopeEvent["ATTACK"] = 0] = "ATTACK";
        FilterEnvelopeEvent[FilterEnvelopeEvent["DECAY"] = 1] = "DECAY";
        FilterEnvelopeEvent[FilterEnvelopeEvent["AMOUNT"] = 2] = "AMOUNT";
    })(FilterEnvelopeEvent || (FilterEnvelopeEvent = {}));

    let FilterEnvelope = class FilterEnvelope extends LitElement {
        constructor() {
            super(...arguments);
            this.shouldMidiLearn = false;
            this.state = {
                attack: 0,
                decay: 127 / 2,
                amount: 0,
            };
        }
        onAttackChange(event) {
            this.dispatchChange(FilterEnvelopeEvent.ATTACK, event.detail.value);
        }
        onDecayChange(event) {
            this.dispatchChange(FilterEnvelopeEvent.DECAY, event.detail.value);
        }
        onAmountChange(event) {
            this.dispatchChange(FilterEnvelopeEvent.AMOUNT, event.detail.value);
        }
        dispatchChange(type, value) {
            this.dispatchEvent(new CustomEvent("change", { detail: { type, value } }));
        }
        render() {
            return html `
      <panel-wrapper-element label="Filter mod">
        <div class="envelope-controls">
          <div class="time-controls">
            <fader-element
              label="A"
              .value=${this.state.attack}
              @change=${this.onAttackChange}
            ></fader-element>
            <fader-element
              label="D"
              .value=${this.state.decay}
              @change=${this.onDecayChange}
            ></fader-element>
          </div>
          <div class="mod-control">
            <knob-element
              label="mod."
              .value=${this.state.amount}
              @change=${this.onAmountChange}
              .shouldMidiLearn="${this.shouldMidiLearn}"
            ></knob-element>
          </div>
        </div>
      </panel-wrapper-element>
    `;
        }
        static get styles() {
            // noinspection CssUnresolvedCustomProperty
            return css `
      :host {
        --panel-wrapper-background-color: #334452;
        --fader-height: 120px;
        --knob-size: 50px;
      }

      .envelope-controls {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 130px;
        height: 160px;
      }

      .envelope-controls .time-controls {
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        width: 60%;
      }
    `;
        }
    };
    __decorate([
        property({ type: Boolean }),
        __metadata("design:type", Object)
    ], FilterEnvelope.prototype, "shouldMidiLearn", void 0);
    __decorate([
        property({ type: Object }),
        __metadata("design:type", Object)
    ], FilterEnvelope.prototype, "state", void 0);
    FilterEnvelope = __decorate([
        customElement("filter-envelope-element")
    ], FilterEnvelope);

    var LfoEvent;
    (function (LfoEvent) {
        LfoEvent[LfoEvent["WAVE_FORM"] = 0] = "WAVE_FORM";
        LfoEvent[LfoEvent["FREQUENCY"] = 1] = "FREQUENCY";
        LfoEvent[LfoEvent["MOD_AMOUNT"] = 2] = "MOD_AMOUNT";
        LfoEvent[LfoEvent["DESTINATION"] = 3] = "DESTINATION";
    })(LfoEvent || (LfoEvent = {}));

    const $ = true;
    const _ = false;
    const chars = {
        A: [
            [_, $, $, $, _],
            [$, _, _, _, $],
            [$, _, _, _, $],
            [$, _, _, _, $],
            [$, $, $, $, $],
            [$, _, _, _, $],
            [$, _, _, _, $],
        ],
        B: [
            [$, $, $, $, _],
            [$, _, _, _, $],
            [$, _, _, _, $],
            [$, $, $, $, _],
            [$, _, _, _, $],
            [$, _, _, _, $],
            [$, $, $, $, _],
        ],
        C: [
            [_, $, $, $, _],
            [$, _, _, _, $],
            [$, _, _, _, _],
            [$, _, _, _, _],
            [$, _, _, _, _],
            [$, _, _, _, $],
            [_, $, $, $, _],
        ],
        D: [
            [$, $, $, _, _],
            [$, _, _, $, _],
            [$, _, _, _, $],
            [$, _, _, _, $],
            [$, _, _, _, $],
            [$, _, _, $, _],
            [$, $, $, _, _],
        ],
        E: [
            [$, $, $, $, $],
            [$, _, _, _, _],
            [$, _, _, _, _],
            [$, $, $, $, _],
            [$, _, _, _, _],
            [$, _, _, _, _],
            [$, $, $, $, $],
        ],
        F: [
            [$, $, $, $, $],
            [$, _, _, _, _],
            [$, _, _, _, _],
            [$, $, $, $, _],
            [$, _, _, _, _],
            [$, _, _, _, _],
            [$, _, _, _, _],
        ],
        G: [
            [_, $, $, $, _],
            [$, _, _, _, $],
            [$, _, _, _, _],
            [$, _, $, $, $],
            [$, _, _, _, $],
            [$, _, _, _, $],
            [_, $, $, $, $],
        ],
        H: [
            [$, _, _, _, $],
            [$, _, _, _, $],
            [$, _, _, _, $],
            [$, $, $, $, $],
            [$, _, _, _, $],
            [$, _, _, _, $],
            [$, _, _, _, $],
        ],
        I: [
            [_, $, $, $, _],
            [_, _, $, _, _],
            [_, _, $, _, _],
            [_, _, $, _, _],
            [_, _, $, _, _],
            [_, _, $, _, _],
            [_, $, $, $, _],
        ],
        J: [
            [_, _, $, $, $],
            [_, _, _, $, _],
            [_, _, _, $, _],
            [_, _, _, $, _],
            [_, _, _, $, _],
            [$, _, _, $, _],
            [_, $, $, _, _],
        ],
        K: [
            [$, _, _, _, $],
            [$, _, _, $, _],
            [$, _, $, _, _],
            [$, $, _, _, _],
            [$, _, $, _, _],
            [$, _, _, $, _],
            [$, _, _, _, $],
        ],
        L: [
            [$, _, _, _, _],
            [$, _, _, _, _],
            [$, _, _, _, _],
            [$, _, _, _, _],
            [$, _, _, _, _],
            [$, _, _, _, _],
            [$, $, $, $, $],
        ],
        M: [
            [$, _, _, _, $],
            [$, $, _, $, $],
            [$, _, $, _, $],
            [$, _, _, _, $],
            [$, _, _, _, $],
            [$, _, _, _, $],
            [$, _, _, _, $],
        ],
        N: [
            [$, _, _, _, $],
            [$, _, _, _, $],
            [$, $, _, _, $],
            [$, _, $, _, $],
            [$, _, _, $, $],
            [$, _, _, _, $],
            [$, _, _, _, $],
        ],
        O: [
            [_, $, $, $, _],
            [$, _, _, _, $],
            [$, _, _, _, $],
            [$, _, _, _, $],
            [$, _, _, _, $],
            [$, _, _, _, $],
            [_, $, $, $, _],
        ],
        P: [
            [$, $, $, $, _],
            [$, _, _, _, $],
            [$, _, _, _, $],
            [$, $, $, $, _],
            [$, _, _, _, _],
            [$, _, _, _, _],
            [$, _, _, _, _],
        ],
        Q: [
            [_, $, $, $, _],
            [$, _, _, _, $],
            [$, _, _, _, $],
            [$, _, _, _, $],
            [$, _, $, _, $],
            [$, _, _, $, _],
            [_, $, $, _, $],
        ],
        R: [
            [$, $, $, $, _],
            [$, _, _, _, $],
            [$, _, _, _, $],
            [$, $, $, $, _],
            [$, _, $, _, _],
            [$, _, _, $, _],
            [$, _, _, _, $],
        ],
        S: [
            [_, $, $, $, _],
            [$, _, _, _, $],
            [$, _, _, _, _],
            [_, $, $, $, _],
            [_, _, _, _, $],
            [$, _, _, _, $],
            [_, $, $, $, _],
        ],
        T: [
            [$, $, $, $, $],
            [_, _, $, _, _],
            [_, _, $, _, _],
            [_, _, $, _, _],
            [_, _, $, _, _],
            [_, _, $, _, _],
            [_, _, $, _, _],
        ],
        U: [
            [$, _, _, _, $],
            [$, _, _, _, $],
            [$, _, _, _, $],
            [$, _, _, _, $],
            [$, _, _, _, $],
            [$, _, _, _, $],
            [_, $, $, $, _],
        ],
        V: [
            [$, _, _, _, $],
            [$, _, _, _, $],
            [$, _, _, _, $],
            [$, _, _, _, $],
            [$, _, _, _, $],
            [_, $, _, $, _],
            [_, _, $, _, _],
        ],
        W: [
            [$, _, _, _, $],
            [$, _, _, _, $],
            [$, _, _, _, $],
            [$, _, $, _, $],
            [$, _, $, _, $],
            [$, _, $, _, $],
            [_, $, _, $, _],
        ],
        X: [
            [$, _, _, _, $],
            [$, _, _, _, $],
            [_, $, _, $, _],
            [_, _, $, _, _],
            [_, $, _, $, _],
            [$, _, _, _, $],
            [$, _, _, _, $],
        ],
        Y: [
            [$, _, _, _, $],
            [$, _, _, _, $],
            [_, $, _, $, _],
            [_, _, $, _, _],
            [_, _, $, _, _],
            [_, _, $, _, _],
            [_, _, $, _, _],
        ],
        Z: [
            [$, $, $, $, $],
            [_, _, _, _, $],
            [_, _, _, $, _],
            [_, _, $, _, _],
            [_, $, _, _, _],
            [$, _, _, _, _],
            [$, $, $, $, $],
        ],
        " ": [
            [_, _, _, _, _],
            [_, _, _, _, _],
            [_, _, _, _, _],
            [_, _, _, _, _],
            [_, _, _, _, _],
            [_, _, _, _, _],
            [_, _, _, _, _],
        ],
        _: [
            [_, _, _, _, _],
            [_, _, _, _, _],
            [_, _, _, _, _],
            [_, _, _, _, _],
            [_, _, _, _, _],
            [_, _, _, _, _],
            [$, $, $, $, $],
        ],
    };

    let LCDChar = class LCDChar extends LitElement {
        render() {
            return html `
      <div class="lcd-char">
        ${this.char.map((ledRow) => this.createLedRow(ledRow))}
      </div>
    `;
        }
        createLedRow(led) {
            return html `
      <div class="led-row">
        ${led.map((led) => this.createLed(led))}
      </div>
    `;
        }
        createLed(isOn) {
            return isOn
                ? html `<div class="led on"></div>`
                : html `<div class="led"></div>`;
        }
        static get styles() {
            // noinspection CssUnresolvedCustomProperty
            return css `
      .lcd-char {
        height: 95%;
        width: 95%;
        display: grid;
        grid-template-rows: repeat(7, 1fr);
      }

      .led-row {
        width: 95%;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
      }

      .led {
        width: 60%;
        height: 60%;
        background-color: transparent;
      }

      .led.on {
        background-color: var(--lcd-led-on-color, #b4d455);
      }
    `;
        }
    };
    __decorate([
        property({ type: Array }),
        __metadata("design:type", Array)
    ], LCDChar.prototype, "char", void 0);
    LCDChar = __decorate([
        customElement("lcd-char-element")
    ], LCDChar);

    let LCD = class LCD extends LitElement {
        render() {
            return html `
      <div class="lcd">
        ${Array.from(this.text).map(this.createLcdChar)}
      </div>
    `;
        }
        createLcdChar(char) {
            const lcdChar = chars[char];
            return html `
      <lcd-char-element .char=${lcdChar} class="char"></lcd-char-element>
    `;
        }
        static get styles() {
            // noinspection CssUnresolvedCustomProperty
            return css `
      .lcd {
        width: var(--lcd-screen-width, 120px);
        height: var(--lcd-screen-height, 12px);

        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-auto-flow: columns;

        border: 1px solid gray;

        background-color: var(--lcd-screen-height, darkslategray);

        padding: 5px;
      }

      .char {
        width: 85%;
        grid-row: 1;
      }
    `;
        }
    };
    __decorate([
        property({ type: String }),
        __metadata("design:type", Object)
    ], LCD.prototype, "text", void 0);
    LCD = __decorate([
        customElement("lcd-element")
    ], LCD);

    class SelectOptions {
        constructor(options) {
            this.currentOption = 0;
            this.options = options;
            this.map = options.map.bind(options);
        }
        get size() {
            return this.options.length;
        }
        set index(index) {
            this.currentOption = index - 1;
            this.next();
        }
        get index() {
            return this.currentOption;
        }
        select(index) {
            this.currentOption = index;
            return this;
        }
        next() {
            if (++this.currentOption >= this.options.length) {
                this.currentOption = 0;
            }
        }
        previous() {
            if (--this.currentOption < 0) {
                this.currentOption = this.options.length - 1;
            }
        }
        getCurrent() {
            return this.options[this.currentOption];
        }
    }

    var _a$1;
    let LCDSelector = class LCDSelector extends LitElement {
        render() {
            return html `
      <div class="lcd-selector">
        <lcd-element .text=${this.options.getCurrent().name}></lcd-element>
        <div class="options">
          ${this.options.map(this.createOptionSelector.bind(this))}
        </div>
      </div>
    `;
        }
        createOptionSelector(_, index) {
            return html `
      <button
        @click=${this.createOptionHandler(index)}
        class="${this.computeButtonClasses(index)}"
      >
        ${index}
      </button>
    `;
        }
        computeButtonClasses(index) {
            return classMap({
                active: this.options.index === index,
            });
        }
        createOptionHandler(index) {
            return () => {
                this.options.index = index;
                this.requestUpdate();
                this.dispatchChange(this.options.getCurrent());
            };
        }
        nextOption() {
            this.options.next();
            this.requestUpdate();
            this.dispatchChange(this.options.getCurrent());
        }
        previousOption() {
            this.options.previous();
            this.requestUpdate();
            this.dispatchChange(this.options.getCurrent());
        }
        dispatchChange({ value }) {
            this.dispatchEvent(new CustomEvent("change", { detail: { value } }));
        }
        static get styles() {
            // noinspection CssUnresolvedCustomProperty
            return css `
      .lcd-selector {
        margin: auto;
      }

      .lcd-selector .options {
        display: flex;
        justify-content: space-between;
        margin: 0.5rem auto 0.5rem auto;

        width: 80%;
      }

      button {
        font-size: var(--button-font-size, 0.5em);

        background-color: var(--lighter-color);
        border: 1px solid var(--light-color, #ccc);
        box-shadow: 0px 1px 1px 1px var(--control-background-color, #ccc);
        transition: all 0.1s ease-in-out;

        display: inline-flex;
        align-items: center;
        justify-content: center;

        cursor: pointer;

        color: black;
      }

      button:focus {
        outline: none;
      }

      button.active {
        background-color: var(--control-handle-color);
        color: white;
        border-color: white;
        box-shadow: none;

        cursor: auto;
      }
    `;
        }
    };
    __decorate([
        property({ type: Object }),
        __metadata("design:type", typeof (_a$1 = typeof SelectOptions !== "undefined" && SelectOptions) === "function" ? _a$1 : Object)
    ], LCDSelector.prototype, "options", void 0);
    LCDSelector = __decorate([
        customElement("lcd-selector-element")
    ], LCDSelector);

    var LfoDestination;
    (function (LfoDestination) {
        LfoDestination["FREQUENCY"] = "FREQUENCY";
        LfoDestination["OSCILLATOR_MIX"] = "OSCILLATOR_MIX";
        LfoDestination["CUTOFF"] = "CUTOFF";
        LfoDestination["RESONANCE"] = "RESONANCE";
    })(LfoDestination || (LfoDestination = {}));
    const lfoDestinations = new SelectOptions([
        { value: LfoDestination.OSCILLATOR_MIX, name: "OSC MIX" },
        { value: LfoDestination.FREQUENCY, name: "FREQUENCY" },
        { value: LfoDestination.CUTOFF, name: "CUTOFF" },
        { value: LfoDestination.RESONANCE, name: "RESONANCE" },
    ]);

    let Lfo = class Lfo extends LitElement {
        constructor() {
            super(...arguments);
            this.label = "LFO";
            this.state = {
                mode: OscillatorMode.SAWTOOTH,
                destinations: lfoDestinations,
                frequency: 127 / 2,
                modAmount: 0,
            };
            this.shouldMidiLearn = false;
        }
        onFrequencyChange(event) {
            this.state.destinations.next();
            this.requestUpdate();
            this.dispatchChange(LfoEvent.FREQUENCY, event.detail.value);
        }
        onModAmountChange(event) {
            this.dispatchChange(LfoEvent.MOD_AMOUNT, event.detail.value);
        }
        onWaveFormChange(event) {
            this.dispatchChange(LfoEvent.WAVE_FORM, event.detail.value);
        }
        onDestinationChange(event) {
            this.dispatchChange(LfoEvent.DESTINATION, event.detail.value);
        }
        dispatchChange(type, value) {
            this.dispatchEvent(new CustomEvent("change", { detail: { type, value } }));
        }
        render() {
            return html `
      <panel-wrapper-element label=${this.label}>
        <div class="lfo-controls">
          <div class="wave-control">
            <wave-selector-element
              .value=${this.state.mode}
              @change=${this.onWaveFormChange}
            ></wave-selector-element>
          </div>
          <div class="destination-control">
            <lcd-selector-element
              .options=${this.state.destinations}
              @change=${this.onDestinationChange}
            ></lcd-selector-element>
          </div>
          <div class="modulation-controls">
            <div class="modulation-control">
              <div class="frequency-control">
                <knob-element
                  .value=${this.state.frequency}
                  @change=${this.onFrequencyChange}
                  .shouldMidiLearn=${this.shouldMidiLearn}
                ></knob-element>
              </div>
              <label>freq.</label>
            </div>
            <div class="modulation-control">
              <div class="mod-amount-control">
                <knob-element
                  .value=${this.state.modAmount}
                  @change=${this.onModAmountChange}
                  .shouldMidiLearn=${this.shouldMidiLearn}
                ></knob-element>
              </div>
              <label>mod.</label>
            </div>
          </div>
        </div>
      </panel-wrapper-element>
    `;
        }
        static get styles() {
            // noinspection CssUnresolvedCustomProperty
            return css `
      :host {
        --panel-wrapper-background-color: #b13f1a;
      }

      .lfo-controls {
        position: relative;
        width: 130px;
        height: 160px;
      }

      .lfo-controls .destination-control {
        margin: 10px auto 10px auto;
      }

      .lfo-controls .modulation-controls {
        display: flex;
        justify-content: space-around;
        width: 100%;
        margin-top: 1em;
      }

      .lfo-controls .modulation-controls .modulation-control {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .lfo-controls .modulation-controls .frequency-control {
        display: flex;
        flex-direction: row;
        align-items: center;

        width: 100%;
        height: 90%;

        --knob-size: 40px;
      }

      .lfo-controls .modulation-controls .mod-amount-control {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;
        height: 90%;
        --knob-size: 40px;
      }

      label {
        display: block;
        color: white;
        font-size: 0.8em;
      }
    `;
        }
    };
    __decorate([
        property({ type: String }),
        __metadata("design:type", Object)
    ], Lfo.prototype, "label", void 0);
    __decorate([
        property({ type: Object }),
        __metadata("design:type", Object)
    ], Lfo.prototype, "state", void 0);
    __decorate([
        property({ type: Boolean }),
        __metadata("design:type", Object)
    ], Lfo.prototype, "shouldMidiLearn", void 0);
    Lfo = __decorate([
        customElement("lfo-element")
    ], Lfo);

    function createStartMessage(time) {
        return {
            type: "START",
            time,
        };
    }
    function createStopMessage(time) {
        return {
            type: "STOP",
            time,
        };
    }
    function createWaveformMessage(target, waveform) {
        return {
            type: "WAVEFORM",
            waveform,
            target,
        };
    }
    function createFilterModeMessage(mode) {
        return {
            type: "FILTER_MODE",
            mode,
        };
    }
    function createLfoDestinationMessage(target, destination) {
        return {
            type: "LFO_DESTINATION",
            destination,
            target,
        };
    }
    class WasmVoiceNode extends AudioWorkletNode {
        constructor(audioContext) {
            super(audioContext, "voice");
            this.params = this.parameters;
        }
        start(time = this.context.currentTime) {
            this.port.postMessage(createStartMessage(time));
        }
        stop(time = this.context.currentTime) {
            this.port.postMessage(createStopMessage(time));
        }
        get frequency() {
            return this.params.get("frequency");
        }
        get amplitude() {
            return this.params.get("amplitude");
        }
        get amplitudeAttack() {
            return this.params.get("amplitudeAttack");
        }
        get amplitudeDecay() {
            return this.params.get("amplitudeDecay");
        }
        get amplitudeSustain() {
            return this.params.get("amplitudeSustain");
        }
        get amplitudeRelease() {
            return this.params.get("amplitudeRelease");
        }
        get cutoff() {
            return this.params.get("cutoff");
        }
        get resonance() {
            return this.params.get("resonance");
        }
        get cutoffEnvelopeAmount() {
            return this.params.get("cutoffEnvelopeAmount");
        }
        get cutoffAttack() {
            return this.params.get("cutoffAttack");
        }
        get cutoffDecay() {
            return this.params.get("cutoffDecay");
        }
        get osc1SemiShift() {
            return this.params.get("osc1SemiShift");
        }
        get osc1CentShift() {
            return this.params.get("osc1CentShift");
        }
        get osc2SemiShift() {
            return this.params.get("osc2SemiShift");
        }
        get osc2CentShift() {
            return this.params.get("osc2CentShift");
        }
        get osc2Amplitude() {
            return this.params.get("osc2Amplitude");
        }
        set osc1(type) {
            this.port.postMessage(createWaveformMessage("osc1", type));
        }
        set osc2(type) {
            this.port.postMessage(createWaveformMessage("osc2", type));
        }
        set filterMode(mode) {
            this.port.postMessage(createFilterModeMessage(mode));
        }
        get lfo1Frequency() {
            return this.params.get("lfo1Frequency");
        }
        get lfo1ModAmount() {
            return this.params.get("lfo1ModAmount");
        }
        set lfo1Mode(mode) {
            this.port.postMessage(createWaveformMessage("lfo1", mode));
        }
        set lfo1Destination(destination) {
            this.port.postMessage(createLfoDestinationMessage("lfo1", destination));
        }
        get lfo2Frequency() {
            return this.params.get("lfo2Frequency");
        }
        get lfo2ModAmount() {
            return this.params.get("lfo2ModAmount");
        }
        set lfo2Mode(mode) {
            this.port.postMessage(createWaveformMessage("lfo2", mode));
        }
        set lfo2Destination(destination) {
            this.port.postMessage(createLfoDestinationMessage("lfo2", destination));
        }
    }

    function* createVoiceGenerator(audioContext) {
        for (;;) {
            yield new WasmVoiceNode(audioContext);
        }
    }
    class VoiceManager {
        constructor(audioContext) {
            this.state = {
                osc1: {
                    mode: OscillatorMode.SAWTOOTH,
                    semiShift: 0,
                    centShift: 0,
                },
                osc1Envelope: {
                    attack: 0,
                    decay: 127 / 2,
                    sustain: 127,
                    release: 127 / 4,
                },
                osc2: {
                    mode: OscillatorMode.SAWTOOTH,
                    semiShift: 0,
                    centShift: 0,
                },
                osc2Envelope: {
                    attack: 0,
                    decay: 127 / 2,
                    sustain: 127,
                    release: 127 / 4,
                },
                osc2Amplitude: 127 / 2,
                filter: {
                    mode: FilterMode.LOWPASS,
                    cutoff: 127,
                    resonance: 0,
                },
                cutoffEnvelope: {
                    attack: 0,
                    decay: 127 / 2,
                    amount: 0,
                },
                lfo1: {
                    mode: OscillatorMode.SINE,
                    frequency: 127 / 2,
                    modAmount: 0,
                    destination: LfoDestination.OSCILLATOR_MIX,
                },
                lfo2: {
                    mode: OscillatorMode.SINE,
                    frequency: 127 / 2,
                    modAmount: 0,
                    destination: LfoDestination.OSCILLATOR_MIX,
                },
            };
            this.voiceGenerator = createVoiceGenerator(audioContext);
            this.channels = Array.from({ length: 16 }).map(() => new Map());
            this.output = new GainNode(audioContext);
        }
        next({ frequency, midiValue, channel }) {
            const voiceMap = this.channels[channel - 1];
            if (voiceMap.has(midiValue)) {
                return voiceMap.get(midiValue);
            }
            const voice = this.voiceGenerator.next().value;
            voice.frequency.value = frequency;
            voice.osc1 = this.state.osc1.mode;
            voice.osc1SemiShift.value = this.state.osc1.semiShift;
            voice.osc1CentShift.value = this.state.osc1.centShift;
            voice.osc2 = this.state.osc2.mode;
            voice.osc2SemiShift.value = this.state.osc2.semiShift;
            voice.osc2CentShift.value = this.state.osc2.centShift;
            voice.osc2Amplitude.value = this.state.osc2Amplitude;
            voice.amplitudeAttack.value = this.state.osc1Envelope.attack;
            voice.amplitudeDecay.value = this.state.osc1Envelope.decay;
            voice.amplitudeSustain.value = this.state.osc1Envelope.sustain;
            voice.amplitudeRelease.value = this.state.osc1Envelope.release;
            voice.filterMode = this.state.filter.mode;
            voice.cutoff.value = this.state.filter.cutoff;
            voice.resonance.value = this.state.filter.resonance;
            voice.cutoffAttack.value = this.state.cutoffEnvelope.attack;
            voice.cutoffDecay.value = this.state.cutoffEnvelope.decay;
            voice.cutoffEnvelopeAmount.value = this.state.cutoffEnvelope.amount;
            voice.lfo1Frequency.value = this.state.lfo1.frequency;
            voice.lfo1ModAmount.value = this.state.lfo1.modAmount;
            voice.lfo1Mode = this.state.lfo1.mode;
            voice.lfo1Destination = this.state.lfo1.destination;
            voice.lfo2Frequency.value = this.state.lfo2.frequency;
            voice.lfo2ModAmount.value = this.state.lfo2.modAmount;
            voice.lfo2Mode = this.state.lfo2.mode;
            voice.lfo2Destination = this.state.lfo2.destination;
            voiceMap.set(midiValue, voice);
            voice.connect(this.output);
            voice.start();
            return voice;
        }
        stop({ midiValue, channel }) {
            const voiceMap = this.channels[channel - 1];
            if (voiceMap.has(midiValue)) {
                voiceMap.get(midiValue).stop();
                voiceMap.delete(midiValue);
            }
        }
        connect(input) {
            this.output.connect(input);
        }
        withState(state) {
            this.state = state;
            return this;
        }
        setOsc1Mode(newMode) {
            this.state.osc1.mode = newMode;
            this.dispatchUpdate((voice) => (voice.osc1 = newMode));
        }
        setOsc1SemiShift(newSemiShift) {
            this.state.osc1.semiShift = newSemiShift;
            this.dispatchUpdate((voice) => (voice.osc1SemiShift.value = newSemiShift));
        }
        setOsc1CentShift(newCentShift) {
            this.state.osc1.centShift = newCentShift;
            this.dispatchUpdate((voice) => (voice.osc1CentShift.value = newCentShift));
        }
        get osc1() {
            return this.state.osc1;
        }
        setOsc2Mode(newMode) {
            this.state.osc2.mode = newMode;
            this.dispatchUpdate((voice) => (voice.osc2 = newMode));
        }
        setOsc2SemiShift(newSemiShift) {
            this.state.osc2.semiShift = newSemiShift;
            this.dispatchUpdate((voice) => (voice.osc2SemiShift.value = newSemiShift));
        }
        setOsc2CentShift(newCentShift) {
            this.state.osc2.centShift = newCentShift;
            this.dispatchUpdate((voice) => (voice.osc2CentShift.value = newCentShift));
        }
        get osc2() {
            return this.state.osc2;
        }
        setOsc1EnvelopeAttack(newAttackTime) {
            this.state.osc1Envelope.attack = newAttackTime;
        }
        setOsc1EnvelopeDecay(newDecayTime) {
            this.state.osc1Envelope.decay = newDecayTime;
        }
        setOsc1EnvelopeSustain(newSustainLevel) {
            this.state.osc1Envelope.sustain = newSustainLevel;
        }
        setOsc1EnvelopeRelease(newReleaseTime) {
            this.state.osc1Envelope.release = newReleaseTime;
        }
        get osc1Envelope() {
            return this.state.osc1Envelope;
        }
        setOsc2Amplitude(newOsc2Amplitude) {
            this.state.osc2Amplitude = newOsc2Amplitude;
            this.dispatchUpdate((voice) => (voice.osc2Amplitude.value = newOsc2Amplitude));
        }
        get osc2Amplitude() {
            return this.state.osc2Amplitude;
        }
        setFilterMode(newMode) {
            this.state.filter.mode = newMode;
            this.dispatchUpdate((voice) => (voice.filterMode = newMode));
        }
        setFilterCutoff(newCutoff) {
            this.state.filter.cutoff = newCutoff;
            this.dispatchUpdate((voice) => (voice.cutoff.value = newCutoff));
        }
        setFilterResonance(newResonance) {
            this.state.filter.resonance = newResonance;
            this.dispatchUpdate((voice) => (voice.resonance.value = newResonance));
        }
        get filter() {
            return this.state.filter;
        }
        setCutoffEnvelopeAmount(newAmount) {
            this.state.cutoffEnvelope.amount = newAmount;
        }
        setCutoffEnvelopeAttack(newAttackTime) {
            this.state.cutoffEnvelope.attack = newAttackTime;
        }
        setCutoffEnvelopeDecay(newDecayTime) {
            this.state.cutoffEnvelope.decay = newDecayTime;
        }
        setLfo1Mode(newMode) {
            this.state.lfo1.mode = newMode;
            this.dispatchUpdate((voice) => (voice.lfo1Mode = newMode));
        }
        setLfo1Destination(newDestination) {
            this.state.lfo1.destination = newDestination;
            this.dispatchUpdate((voice) => (voice.lfo1Destination = newDestination));
        }
        setLfo1Frequency(newFrequency) {
            this.state.lfo1.frequency = newFrequency;
            this.dispatchUpdate((voice) => (voice.lfo1Frequency.value = newFrequency));
        }
        setLfo1ModAmount(newAmount) {
            this.state.lfo1.modAmount = newAmount;
            this.dispatchUpdate((voice) => (voice.lfo1ModAmount.value = newAmount));
        }
        setLfo2Mode(newMode) {
            this.state.lfo2.mode = newMode;
            this.dispatchUpdate((voice) => (voice.lfo2Mode = newMode));
        }
        setLfo2Destination(newDestination) {
            this.state.lfo2.destination = newDestination;
            this.dispatchUpdate((voice) => (voice.lfo2Destination = newDestination));
        }
        setLfo2Frequency(newFrequency) {
            this.state.lfo2.frequency = newFrequency;
            this.dispatchUpdate((voice) => (voice.lfo2Frequency.value = newFrequency));
        }
        setLfo2ModAmount(newAmount) {
            this.state.lfo2.modAmount = newAmount;
            this.dispatchUpdate((voice) => (voice.lfo2ModAmount.value = newAmount));
        }
        get cutoffEnvelope() {
            return this.state.cutoffEnvelope;
        }
        dispatchUpdate(doUpdate) {
            for (const channel of this.channels) {
                for (const voice of channel.values()) {
                    doUpdate(voice);
                }
            }
        }
    }

    var _a$2;
    let Root = class Root extends LitElement {
        constructor() {
            super(...arguments);
            this.shouldMidiLearn = false;
        }
        async connectedCallback() {
            super.connectedCallback();
            this.audioContext = new AudioContext();
            this.analyzer = this.audioContext.createAnalyser();
            this.voiceManager = new VoiceManager(this.audioContext);
            this.voiceManager.connect(this.analyzer);
            this.analyzer.connect(this.audioContext.destination);
            await this.audioContext.audioWorklet.addModule("wasm.js");
            this.registerMidiLearners();
        }
        async onKeyOn(event) {
            if (this.audioContext.state === "suspended") {
                await this.audioContext.resume();
            }
            const { frequency, midiValue, channel } = event.detail;
            this.voiceManager.next({ frequency, midiValue, channel });
        }
        onKeyOff(event) {
            const { midiValue, channel } = event.detail;
            this.voiceManager.stop({ midiValue, channel });
        }
        notifyMidiLearners(event) {
            GlobalDispatcher.dispatch(DispatcherEvent.SHOULD_MIDI_LEARN, event.detail);
        }
        registerMidiLearners() {
            GlobalDispatcher.subscribe(DispatcherEvent.SHOULD_MIDI_LEARN, (event) => {
                this.shouldMidiLearn = event.detail.value;
            });
        }
        onOsc1Change(event) {
            switch (event.detail.type) {
                case OscillatorEvent.WAVE_FORM:
                    this.voiceManager.setOsc1Mode(event.detail.value);
                    break;
                case OscillatorEvent.SEMI_SHIFT:
                    this.voiceManager.setOsc1SemiShift(event.detail.value);
                    break;
                case OscillatorEvent.CENT_SHIFT:
                    this.voiceManager.setOsc1CentShift(event.detail.value);
                    break;
            }
        }
        onOsc1EnvelopeChange(event) {
            switch (event.detail.type) {
                case OscillatorEnvelopeEvent.ATTACK:
                    this.voiceManager.setOsc1EnvelopeAttack(event.detail.value);
                    break;
                case OscillatorEnvelopeEvent.DECAY:
                    this.voiceManager.setOsc1EnvelopeDecay(event.detail.value);
                    break;
                case OscillatorEnvelopeEvent.SUSTAIN:
                    this.voiceManager.setOsc1EnvelopeSustain(event.detail.value);
                    break;
                case OscillatorEnvelopeEvent.RELEASE:
                    this.voiceManager.setOsc1EnvelopeRelease(event.detail.value);
                    break;
            }
        }
        onOscMixChange(event) {
            this.voiceManager.setOsc2Amplitude(event.detail.value);
        }
        onOsc2Change(event) {
            switch (event.detail.type) {
                case OscillatorEvent.WAVE_FORM:
                    this.voiceManager.setOsc2Mode(event.detail.value);
                    break;
                case OscillatorEvent.SEMI_SHIFT:
                    this.voiceManager.setOsc2SemiShift(event.detail.value);
                    break;
                case OscillatorEvent.CENT_SHIFT:
                    this.voiceManager.setOsc2CentShift(event.detail.value);
                    break;
            }
        }
        onFilterChange(event) {
            switch (event.detail.type) {
                case FilterEvent.MODE:
                    this.voiceManager.setFilterMode(event.detail.value);
                    break;
                case FilterEvent.CUTOFF:
                    this.voiceManager.setFilterCutoff(event.detail.value);
                    break;
                case FilterEvent.RESONANCE:
                    this.voiceManager.setFilterResonance(event.detail.value);
                    break;
            }
        }
        onFilterEnvelopeChange(event) {
            switch (event.detail.type) {
                case FilterEnvelopeEvent.ATTACK:
                    this.voiceManager.setCutoffEnvelopeAttack(event.detail.value);
                    break;
                case FilterEnvelopeEvent.DECAY:
                    this.voiceManager.setCutoffEnvelopeDecay(event.detail.value);
                    break;
                case FilterEnvelopeEvent.AMOUNT:
                    this.voiceManager.setCutoffEnvelopeAmount(event.detail.value);
                    break;
            }
        }
        onLfo1Change(event) {
            switch (event.detail.type) {
                case LfoEvent.WAVE_FORM:
                    this.voiceManager.setLfo1Mode(event.detail.value);
                    break;
                case LfoEvent.FREQUENCY:
                    this.voiceManager.setLfo1Frequency(event.detail.value);
                    break;
                case LfoEvent.MOD_AMOUNT:
                    this.voiceManager.setLfo1ModAmount(event.detail.value);
                    break;
                case LfoEvent.DESTINATION:
                    this.voiceManager.setLfo1Destination(event.detail.value);
            }
        }
        onLfo2Change(event) {
            switch (event.detail.type) {
                case LfoEvent.WAVE_FORM:
                    this.voiceManager.setLfo2Mode(event.detail.value);
                    break;
                case LfoEvent.FREQUENCY:
                    this.voiceManager.setLfo2Frequency(event.detail.value);
                    break;
                case LfoEvent.MOD_AMOUNT:
                    this.voiceManager.setLfo2ModAmount(event.detail.value);
                    break;
                case LfoEvent.DESTINATION:
                    this.voiceManager.setLfo2Destination(event.detail.value);
            }
        }
        render() {
            return html `
      <div class="content">
        <div class="visualizer">
          <visualizer-element
            .analyser=${this.analyzer}
            width="1024"
            height="300"
          ></visualizer-element>
        </div>
        <switch-element @change="${this.notifyMidiLearners}"></switch-element>
        <div class="synth">
          <div class="oscillators">
            <oscillator-element
              label="Osc 1"
              .state=${this.voiceManager.osc1}
              @change=${this.onOsc1Change}
              .shouldMidiLearn="${this.shouldMidiLearn}"
            ></oscillator-element>
            <div class="oscillator-mix">
              <panel-wrapper-element class="oscillator-mix-wrapper">
                <div class="oscillator-mix-control">
                  <knob-element
                    label="osc mix"
                    .value=${this.voiceManager.osc2Amplitude}
                    @change=${this.onOscMixChange}
                    .shouldMidiLearn="${this.shouldMidiLearn}"
                  ></knob-element>
                </div>
              </panel-wrapper-element>
            </div>
            <oscillator-element
              label="Osc 2"
              .state=${this.voiceManager.osc1}
              @change=${this.onOsc2Change}
              .shouldMidiLearn="${this.shouldMidiLearn}"
            ></oscillator-element>
            <filter-element
              .state=${this.voiceManager.filter}
              @change=${this.onFilterChange}
              .shouldMidiLearn="${this.shouldMidiLearn}"
            ></filter-element>
          </div>
          <div class="envelopes">
            <envelope-element
              label="envelope"
              .state=${this.voiceManager.osc1Envelope}
              @change=${this.onOsc1EnvelopeChange}
            ></envelope-element>
            <lfo-element
              label="lfo 1"
              @change=${this.onLfo1Change}
              .shouldMidiLearn="${this.shouldMidiLearn}"
            ></lfo-element>
            <lfo-element
              label="lfo 2"
              @change=${this.onLfo2Change}
              .shouldMidiLearn="${this.shouldMidiLearn}"
            ></lfo-element>
            <filter-envelope-element
              .state=${this.voiceManager.cutoffEnvelope}
              @change=${this.onFilterEnvelopeChange}
              .shouldMidiLearn="${this.shouldMidiLearn}"
            ></filter-envelope-element>
          </div>
        </div>
        <div class="sequencer">
          <div class="keys">
            <keys-element
              midiChannel="1"
              @keyOn="${this.onKeyOn},"
              @keyOff=${this.onKeyOff}
            ></keys-element>
          </div>
        </div>
      </div>
    `;
        }
        static get styles() {
            return css `
      .content {
        width: 85%;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .visualizer {
        margin: auto;
      }

      .menu {
        margin: 10px 0;
      }

      .synth {
        margin: 20px auto;
        width: 650px;

        background-color: #d7893b;

        border-radius: 0.5rem;
        padding: 1rem;
      }

      .synth .oscillators {
        display: flex;

        justify-content: space-between;
        align-items: center;
      }

      .synth .oscillator-mix {
        --knob-size: 60px;
        --panel-wrapper-background-color: #7a1621;

        display: inline-flex;
        justify-content: center;
      }

      .synth .oscillator-mix .oscillator-mix-control {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
      }

      .synth .envelopes {
        display: flex;
        justify-content: space-between;
        align-items: center;

        margin-top: 1em;
      }

      .sequencer {
        width: 30%;
        margin: 1em auto;
        --key-height: 100px;
      }
    `;
        }
    };
    __decorate([
        property({ type: Object }),
        __metadata("design:type", typeof (_a$2 = typeof AnalyserNode !== "undefined" && AnalyserNode) === "function" ? _a$2 : Object)
    ], Root.prototype, "analyzer", void 0);
    __decorate([
        property({ type: Boolean }),
        __metadata("design:type", Object)
    ], Root.prototype, "shouldMidiLearn", void 0);
    Root = __decorate([
        customElement("child-element")
    ], Root);

})));
//# sourceMappingURL=index.js.map