export function lerp(start, end, multiplier) {
	return start * (1 - multiplier) + end * multiplier;
}

export function clamp(value, start = 0, end = 1) {
	return Math.min(end, Math.max(start, value));
}

export function unlerp(start, end, value) {
	let gap = end - start;
	return (value - start) / gap;
}

export function range(start1, end1, start2, end2, value) {
	let multiplier = unlerp(start1, end1, value);
	return lerp(start2, end2, multiplier);
}

export function average(...values) {
	return values.reduce((sum, value) => sum + value, 0) / values.length;
}
