const AccountView = () => {
  let data = [
    {label: "First name", content: "John"},
    {label: "Last name", content: "Doe"},
    {label: "Email", content: "john.doe@example.com"}
  ]

  return (<div>
    <h1 className="p-2">Account View</h1>
    {data.map(dataElement => {
      return (<div className="p-2">
        <span className="p-2">{dataElement.label}</span>
        <span className="p-2">{dataElement.content}</span>
        </div>)
    })}
    </div>)
}

export default AccountView