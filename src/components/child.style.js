export default function () {
  return <style global jsx>{`
            $red: red;
            div {
              b {
                background: black;
                color: $red;
              }
            }
          `}</style>
}