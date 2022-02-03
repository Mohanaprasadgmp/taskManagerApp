require('../src/db/mongoose')
const Task = require('../src/models/task')

//handling via promise-chaining

Task.findByIdAndDelete('61f165e264d75e46e0c2ce45').then(
    (data) => {
        console.log(data);
        return Task.countDocuments({ completed : false }).then(
            (task) => {
                console.log('data ', task);
            }
        )
    }
).catch(
    (error) => {
        console.log(error);
    }
)

//handling via async and await

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed : false})
    return count
}

deleteTaskAndCount('61f165e264d75e46e0c2ce45').then(
    (count) => {
        console.log(count);
    }
).catch(
    (error) => {
        console.log(error);
    }
)