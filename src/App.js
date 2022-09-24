import CheckInRecoed from "./CheckInRecord";
import Student from "./Student";
import './App.css'

function App() {
  const name = "Alicia";
  // const element = <h1>My name is {name}!!</h1>
  // const element2 = <h1>1 + 1 = {1+1}</h1>
  return (
    <div>
      {/* <h1>Hello, world!</h1>
      {element}
      {element2} */}
      <h1 id="title1" className="title">오늘의 체크인 기록</h1>
      <CheckInRecoed name="최자윤" score={2} comment="프로젝트가 많아서 걱정"></CheckInRecoed>
      <CheckInRecoed name="alicia" score={5} comment="시험이 2주도 안남아서 걱정"/>
      <h1 className="title">학생 목록</h1>
      <Student name="Alicia1"/>
      <Student name="Alicia2"/>
      <h1 className="title">제목3</h1>
      <h1>제목4</h1>
      <h1>제목5</h1>
    </div>
  );
}

export default App;
