/**
 * Get contents of a directory from the api
 * @param commit
 * @param payload
 */
export const getContents = (context, payload) => {
    api.getContents(payload)
        .then(contents => {
            context.commit(types.LOAD_CONTENTS_SUCCESS, contents);
            context.commit(types.UNSELECT_ALL_BROWSER_ITEMS);
            context.commit(types.SELECT_DIRECTORY, payload);
        })
        .catch(error => {
            // TODO error handling
            console.log("error", error);
        });
}