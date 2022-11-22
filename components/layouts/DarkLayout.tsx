interface Children {
  children: JSX.Element
}
export const DarkLayout = ({ children }: Children) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
        padding: "10px",
        borderRadius: "5px"
      }}
    >
      <div> {children}</div>
    </div>
  )
}


