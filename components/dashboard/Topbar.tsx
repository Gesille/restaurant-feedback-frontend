import { BellIcon, PlusIcon, SearchIcon } from "@/icons/icons";


export function Topbar() {
  return (
    <div className="topbar">
      <div>
        <h1>Restaurant QR Analytics</h1>
        <p>Live performance overview across all onboarded restaurant clients</p>
      </div>
      <div className="top-actions">
        <div className="search">
          <SearchIcon />
          Search restaurants…
        </div>
        <button type="button" className="icon-btn" aria-label="Notifications">
          <BellIcon />
          <span className="dot" />
        </button>
        <button type="button" className="btn-primary">
          <PlusIcon />
          New Restaurant
        </button>
      </div>
    </div>
  );
}