/* 
Khi thiết kế theo hướng design 1 đối tượng (data model) thì cần tập trung vào thuộc tính của đối tượng thay vì phương thức.
Các phương thức trong đối tượng chỉ nên thực hiện các thao tác trên dữ liệu của đối tượng đó.

MVC
- Model View: design data model
- Controller: handling method for data model Functional Programming
*/

class RobotCat {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    };

    charge() {
        return `${this.name} is charging`;
    };
}

module.exports = RobotCat;