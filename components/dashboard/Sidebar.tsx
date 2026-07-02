import { NAV_SECTIONS } from "./nav-config";


export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark">MS</div>
        <div>
          <div className="brand-name">MenuScan</div>
          <div className="brand-sub">Client Evaluation</div>
        </div>
      </div>

      {NAV_SECTIONS.map((section) => (
        <div key={section.label}>
          <div className="nav-label">{section.label}</div>
          {section.items.map((item) => (
            <button
              key={item.label}
              type="button"
              className={`nav-item${item.active ? " active" : ""}`}
            >
              <item.icon />
              {item.label}
              {item.badge && <span className="badge">{item.badge}</span>}
            </button>
          ))}
        </div>
      ))}

      <div className="sidebar-foot">
        <div className="avatar">RA</div>
        <div>
          <div className="name">Rana Al-Sayed</div>
          <div className="role">HR · Client Success</div>
        </div>
      </div>
    </aside>
  );
}