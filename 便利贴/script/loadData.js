function loadData(){
    // 遍历本地所有的数据
    for (var i = 0; i < localStorage.length; i++) {
        // 根据索引获取key值
        var key = localStorage.key(i);
        // 根据获取的key值得到value
        var value = localStorage.getItem(key);
        addNote(key,value);
    }
}

loadData();