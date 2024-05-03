const generateUniqueId = (config = {}) =>{
    //destructing
    const {prefix} = config;
    if(prefix){
        return prefix +"_"+
        Math.random().toString(36).substring(2);
    }
    return
    Math.random().toString(36).substring(2);
}