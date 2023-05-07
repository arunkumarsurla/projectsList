import './index.css'

const TabItem = props => {
  const {tabDetails,updateTabId,isActive} = props
  const {tabId,displayText} = tabDetails

  const changeTab = () => {
    updateTabId(tabId)
  }
  
  return (
    <li className="tab-item-container ">
      <button type="button" className={`tab-btn ${isActive ? "active-tab-btn" : ""}`} onClick={changeTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
