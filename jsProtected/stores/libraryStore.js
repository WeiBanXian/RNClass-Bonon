import {observable, computed, action/*, reaction*/} from 'mobx';

import libraries from './LibraryList.json';
import find from 'lodash/find';


export default class LibraryStore {
	@observable libraries = libraries;

	@computed get getSelectedLibrary() {
		return find(this.libraries, 'selected');
    }

    @action setSelectedLibrary(id) {
        if (this.getSelectedLibrary) {
            this.getSelectedLibrary.selected = false;
        }
        find(this.libraries, {id}).selected = true;
        // this.libraries.slice(0)
    }

    // TODO: 添加请求: reaction / action
    async getRequest(params) {
        // await axios.get
    }
    /*
    isSelected = id => {
        let flag = false;
        flag = find(this.libraries, {id}).selected;
		return flag;
    };
    */
};