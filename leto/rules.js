var foundAt = -1;

var mapHasFound = {};

exports.insertAfterFinding = function( lineNumber, text, stringToFind, lineToInsert, numLinesAfter ) {
	if( mapHasFound[stringToFind] )
		return text;

	if( numLinesAfter === undefined )
		numLinesAfter = 1;

	// Mark the place where we found the text we're looking for
	if( foundAt == -1 && text.indexOf(stringToFind) != -1 )
		foundAt = lineNumber;

	// If this is the line we need to change, insert the new string
	if( foundAt != -1 && lineNumber == foundAt + numLinesAfter - 1 ) {
		mapHasFound[stringToFind] = true;
		foundAt = -1;
		text += "\n" + lineToInsert;
	}

	return text;
}