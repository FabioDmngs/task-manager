const prisma = require('../config/database');

class TaskService {
    async findTaskByUserId(userId) {
        return prisma.tasks.findMany({
            where: { user_id: userId },
            orderBy: { id: 'desc' }
        });
    }

    async createTask(title, userId) {
        return prisma.tasks.create({
            data: {
                title,
                user_id: userId
            }
        });
    }

    async findTaskById(taskId, userId) {
        return prisma.tasks.findFirst({
            where: {
                id: taskId,
                user_id: userId
            }
        });
    }

   async toggleTaskStatus(taskId, completed) {
        return prisma.tasks.update({
            where: { id: taskId },
            data: { completed }
        }); 
    }

    async deleteTask(taskId, userId) {
        return prisma.tasks.deleteMany({
            where: {
                id: taskId,
                user_id: userId
            }
        });
    }
}

module.exports = new TaskService();