function isLocalStorageUsable() {
    const localStorageTestKey = '__localStorage_support_test';
    const localStorageTestValue = 'tets';
    let isSupport = false;
    try {
        localStorage.setItem(localStorageTestKey, localStorageTestValue);
        if (localStorage.getItem(localStorageTestKey) === localStorageTestValue) {
            isSupport = true;
        }
        localStorage.removeItem(localStorageTestKey);
        return isSupport
    } catch(e) {
        console.log(e);
        if (e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
            console.warn('localStorage 存储已达上限!');
        } else {
            console.warn('当前浏览器不支持localStorage!');
        }
        return isSupport;
    }
};

console.log(isLocalStorageUsable());