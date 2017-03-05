var test1 = 'test1';
let test2 = 'test2';
window.test5 = test1; //window 객체만 전역으로 들어간다.(this는 이미 있는 객체만 된다)

class Developer {
    constructor(keyboard, monitor, project='none', arrayProject=[]) {
        this._keyboard = keyboard;
        this._monitor = monitor;
        this._project = project;
        this._arrayProject = arrayProject;
        this.initBtn();
    }

    getDeveloperItem() {
        let message = 'My keyboard is ' + this._keyboard + ' and my monitor is ' + this._monitor;
        return message;
    }

    get project() {
        return this._project;
    }

    set project(value) {
        this._project = value;
    }

    reduceArrayProject() {
        return this._arrayProject.reduce((a, b) => {
            return a + b;
        })
    }

    initBtn() { //버튼 이벤트 하나의 메소드로 묶을 수 있음
        let btn = document.querySelector('button');
        btn.addEventListener('click', (e) => { //e => 마우스 이벤트
            alert('success btn!');
        })
    }

    /*doGenerator() { //제너레이터 적용
        let self = this;
        let generator  = { *x() { return yield self._arrayProject; } };
    }*/

    /*[Symbol.iterator]() { //제너레이터용 클래스에서 사용할 때
        var index = 0;
        var data  = this._arrayProject;

        return {
            next: () => ({ value: data[++index], done: !(index in data) })
        };
    };*/
}

export default Developer;