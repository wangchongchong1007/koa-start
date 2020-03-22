module.exports = {
    login: async (name, pwd) => {
        let data;
        if (name == 'hannie' && pwd == '12345') {
            data = `hello, ${name}`;
        } else {
            data = '密码错误';
        }
        return data;
    }
};
