// for setState
export const selectLibraryState = libraryId => state => {
	const libraries = state.libraries.map(library => {
      	if (library.id != libraryId ) {
            return {
                ...library,
                selected: false
            };
      	}
      	return {
        	...library,
        	selected: true
  		};
    });
    return { libraries };
};

// for redux
export const selectLibrary = libraryId => {
    return {
        type: 'select_library',
        payload: libraryId
    };
};
