const _ = require('lodash');
const uuid = require('uuid/v4');
const utils = require('../../utils');
const { get, post, put, del } = require('../../router');
const users = require('./user.data');

exports.default = class User {
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

    @get('/users/:id')
    async getUser(ctx) {
        const { id } = ctx.params;
        const user = _.find(users, { id });
        ctx.body = { result: true, data: user };
    }

    @post('/users')
    async createUser(ctx) {
        const { user } = ctx.request.body;
        user.id = uuid();
        users.push(user);
        ctx.body = { result: true };
    }

    @put('/users/:id')
    async updateUser(ctx) {
        const { id } = ctx.params;
        const user = _.find(users, { id });
        Object.assign(user, ctx.request.body.user);
        ctx.body = { result: true };
    }

    @del('/users/:id')
    async deleteUser(ctx) {
        const { id } = ctx.params;
        users = _.reject(users, { id });
        ctx.body = { result: true };
    }
};
