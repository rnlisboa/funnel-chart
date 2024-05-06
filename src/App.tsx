import FunnelChart from "./components/FunnelChart/FunnelChart"


function App() {
  const data = [
    {
      label: "Leads", value: 156
    },
    {
      label: "Leads Únicos", value: 151
    },
    {
      label: "Contatos", value: 44
    },
    {
      label: "Agendamentos", value: 30
    },
    {
      label: "Agendamentos até hoje", value: 30
    },
    {
      label: "Endereços", value: 11
    },
    {
      label: "Efetivações", value: 6
    },

  ]

  return (
    <>
      <FunnelChart data={data}/>
    </>
  )
}

export default App
