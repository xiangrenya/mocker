# mocker
前后端分离，模拟后端接口

# 技术栈
koa + koa-router + mockjs

运用装饰器的语法，简化 api 的写法，如下示例：

```javascript
class User {
    @get('/users')
    async getUsers(ctx) {
        const { search = '', pageNum, pageSize } = ctx.query;
        const fields = ['name', 'employeeId'];
        const filteredUsers = users.filter(user => {
            return fields.some(field => user[field].includes(search));
        });
        ctx.body = {
            result: true,
            ...utils.pagination(filteredUsers, pageNum, pageSize)
        };
    }
}
```
