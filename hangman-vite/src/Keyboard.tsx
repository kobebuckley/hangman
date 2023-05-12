const KEYS = [

]

export function Keyboard(){
    return(
        <div style={{
            display: 'grid',
            gridTemplateColumns: "repeat(auto-fit, minmax(75, 1fr)",
            gap: ".5rem",
          }}
          >
           {KEYS.map(key => {
            return <button key={key}>{key}</button>
           })}
          </div>
        )
}