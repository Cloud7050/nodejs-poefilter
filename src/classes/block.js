export class Block {
	c;
	e;

	constructor(c, e) {
		this.c = c;
		this.e = e;
	}

	export() {
		let spans = [];

		spans.push(this.e.getBlockStart());
		spans.push(...this.c.export().map(span => `	${span}`));

		spans.push("");
		spans.push(...this.e.export().map(span => `	${span}`));

		let blockEnd = this.c.getBlockEnd();
		if (blockEnd !== null) {
			spans.push("");
			spans.push(`	${blockEnd}`);
		}

		spans.push("");
		return spans;
	}
}
