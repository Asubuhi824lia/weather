import s from './Days.module.scss';


function Tabs() {
  const tabs = [
    {
      value: "На неделю",
    },
    {
      value: "На 10 дней",
    },
    {
      value: "На месяц",
    },
  ]

  return (
    <section className={s.tabs_wrapper}>
      {tabs.map((tab, id) => (
        <div key={id} className={`${s.tab} ${id===0 ? s.active:''}`}>{tab.value}</div>
      ))}
    </section>
  );
}

export default Tabs;