export const getDiffCB = (timestamp: number, x1, y1, x2, y2, x3, y3, x4, y4): number => {
	const tp = 1 - timestamp;
	const dx = 3 * (timestamp * timestamp * (x4 - x3) + 2 * timestamp * tp * (x3 - x2) + tp * tp * (x2 - x1));
	const dy = 3 * (timestamp * timestamp * (y4 - y3) + 2 * timestamp * tp * (y3 - y2) + tp * tp * (y2 - y1));
	return radianToDegree(Math.atan2(dy, dx));
};

export const radianToDegree = (radian: number): number => {
	return (radian * 180) / Math.PI;
};

