  const Header = ({course}) => {
    return <h1>{course}</h1>
  }

  const Content = ({part1, exercises1,part2, exercises2, part3, exercises3}) => {
    return (
      <div>
        <p>{part1} {exercises1}</p>
        <p>{part2} {exercises2}</p>
        <p>{part3} {exercises3}</p>
      </div>
      
    )
  }

  const Total = ({exercises1, exercises2, exercises3}) => {
    return <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
  }

  const App = () => {
  const course = 'Half Stack application development' // This is the course name
  const part1 = 'Fundamentals of React' // This is the name of the first part
  const exercises1 = 10 // This is the number of exercises in the first part
  const part2 = 'Using props to pass data' // This is the name of the second part
  const exercises2 = 7 // This is the number of exercises in the second part
  const part3 = 'State of a component' // This is the name of the third part
  const exercises3 = 14 // This is the number of exercises in the third part

  return (
    <div>
     <Header course={course} />
     <Content
     part1={part1} exercises1={exercises1}
     part2={part2} exercises2={exercises2}
     part3={part3} exercises3={exercises3}
     />
    <Total
    exercises1={exercises1}
    exercises2={exercises2}
    exercises3={exercises3}
    />
    </div>
  )
}

export default App