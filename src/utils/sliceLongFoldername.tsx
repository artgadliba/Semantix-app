const sliceLongFoldername = (name: string, type: string): string => {
    if (type === "header") {
        const maxLength = 85;
        if (name.length > maxLength) {
            return name.slice(0, -(name.length - maxLength)) + "...";
        } else {
            return name;
        }
    } else if (type === "headerMobile") {
        const maxLength = 27;
        if (name.length > maxLength) {
            return name.slice(0, -(name.length - maxLength)) + "...";
        } else {
            return name;
        }
    } else if (type === "foldersMenu") {
        const maxLength = 17;
        if (name.length > maxLength) {
            return name.slice(0, -(name.length - maxLength)) + "...";
        } else {
            return name;
        }
    }
}

export default sliceLongFoldername;