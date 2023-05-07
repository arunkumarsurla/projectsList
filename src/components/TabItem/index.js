import './index.css'

const TabItem = props => {
  const {tabDetails,updateTabId,isActive} = props
  const {tabId,displayText} = tabDetails

  const changeTab = () => {
    updateTabId(tabId)
  }
  const updateStyles =  isActive ? "active-tab-btn" : ""
  
  return (
    <li className="tab-item-container ">
      <button type="button" className={`tab-btn ${updateStyles}`} onClick={changeTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
