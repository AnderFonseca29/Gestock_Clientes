import { En as ElementRef, Vl as operate, Wl as identity, zl as createOperatorSubscriber } from "./core-Cz0Y9r6B.js";
//#region node_modules/rxjs/dist/esm5/internal/operators/distinctUntilChanged.js
function distinctUntilChanged(comparator, keySelector) {
	if (keySelector === void 0) keySelector = identity;
	comparator = comparator !== null && comparator !== void 0 ? comparator : defaultCompare;
	return operate(function(source, subscriber) {
		var previousKey;
		var first = true;
		source.subscribe(createOperatorSubscriber(subscriber, function(value) {
			var currentKey = keySelector(value);
			if (first || !comparator(previousKey, currentKey)) {
				first = false;
				previousKey = currentKey;
				subscriber.next(value);
			}
		}));
	});
}
function defaultCompare(a, b) {
	return a === b;
}
//#endregion
//#region node_modules/@angular/cdk/fesm2022/_element-chunk.mjs
function coerceNumberProperty(value, fallbackValue = 0) {
	if (_isNumberValue(value)) return Number(value);
	return arguments.length === 2 ? fallbackValue : 0;
}
function _isNumberValue(value) {
	return !isNaN(parseFloat(value)) && !isNaN(Number(value));
}
function coerceElement(elementOrRef) {
	return elementOrRef instanceof ElementRef ? elementOrRef.nativeElement : elementOrRef;
}
//#endregion
export { coerceNumberProperty as n, distinctUntilChanged as r, coerceElement as t };
