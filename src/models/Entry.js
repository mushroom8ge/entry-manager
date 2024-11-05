class Entry {
  constructor({
    id = "",
    type = "Capture Alphanumeric",
    prompt = "",
    stage = "",
    enabled = false,
  } = {}) {
    this.id = id;
    this.type = type;
    this.prompt = prompt;
    this.stage = stage;
    this.enabled = enabled;
  }
}

export default Entry;
