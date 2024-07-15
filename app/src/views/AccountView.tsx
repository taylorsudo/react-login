const AccountView = () => {
  let data = [
    {label: "First name", content: "John"},
    {label: "Last name", content: "Doe"},
    {label: "Email", content: "john.doe@example.com"}
  ]

  return (<div>
    <h1>Account View</h1>
    {data.map(dataElement => {
      return (<div>
        <span>{dataElement.label}</span>
        <span>{dataElement.content}</span>
        </div>)
    })}
    </div>)
}

export default AccountView