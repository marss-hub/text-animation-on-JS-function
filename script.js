const PREFIX_ID = "id_";
const DEFAULT_CONTEXT_ELEMENT = "div";
const DEFAULT_CONTEXT_CLASS = "context-element";

function createContext(id) {
  const htmlNode = document.createElement(DEFAULT_CONTEXT_ELEMENT);
  htmlNode.classList.add(DEFAULT_CONTEXT_CLASS);
  htmlNode.id = PREFIX_ID + id;
  document.body.append(htmlNode);
}

function setContextStyle(id, style) {
  if (!hasContext(id)) throw new Error(`context (id = ${id}) is not found`);
  const contextId = `#${PREFIX_ID}${id}`;
  const htmlNode = document.querySelector(contextId);
  htmlNode.setAttribute("style", style);
}

function getContextStyle(id) {
  if (!hasContext(id)) throw new Error(`context (id = ${id}) is not found`);
  const contextId = `#${PREFIX_ID}${id}`;
  return document.querySelector(contextId).getAttribute("style");
}

function hasContext(id) {
  return !!document.querySelector(`#${PREFIX_ID}${id}`);
}

function removeContext(id) {
  if (!hasContext(id)) throw new Error(`context (id = ${id}) is not found`);
  const contextId = `#${PREFIX_ID}${id}`;
  document.body.remove(document.querySelector(contextId));
}

function writeContext(id, text) {
  if (!hasContext(id)) throw new Error(`context (id = ${id}) is not found`);
  const contextId = `#${PREFIX_ID}${id}`;
  document.querySelector(contextId).innerHTML = text;
}

function readContext(id) {
  if (!hasContext(id)) throw new Error(`context (id = ${id}) is not found`);
  const contextId = `#${PREFIX_ID}${id}`;
  return document.querySelector(contextId).innerHTML;
}
