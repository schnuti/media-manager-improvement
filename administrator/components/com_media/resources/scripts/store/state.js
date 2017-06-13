// Get the disks from joomla option storage
const options = Joomla.getOptions('com_media', {});
if (options.providers === undefined || options.providers.length === 0) {
    throw new TypeError('Media providers are not defined.');
}

// The initial state
export default {
    // Will hold the activated filesystem disks
    disks: options.providers,
    // The selected disk
    selectedDisk: options.providers[0].name, // TODO check for existence
    // The selected directory for the active disk
    selectedDirectory: '/',
    // Whether or not the create folder modal should be shown
    showCreateFolderModal: false,
    // The currently selected items
    selectedItems: [],
}