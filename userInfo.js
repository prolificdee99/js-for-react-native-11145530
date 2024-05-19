function createUserProfiles(names, modifiedNames) {
    const profiles = [];
    for (let i = 0; i < names.length; i++) {
        profiles.push({
            originalName: names[i],
            modifiedName: modifiedNames[i],
            id: i + 1
        });
    }
    return profiles;
}
