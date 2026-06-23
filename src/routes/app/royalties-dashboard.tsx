import { createFileRoute } from "@tanstack/react-router";
import { Badge } from "@buildoutinc/blueprint-react/ui/Badge";
import { Card } from "@buildoutinc/blueprint-react/ui/Card";
import { Table } from "@buildoutinc/blueprint-react/ui/Table";
import { Tooltip } from "@buildoutinc/blueprint-react/ui/Tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faArrowTrendDown,
  faArrowTrendUp,
  faChevronDown,
} from "@fortawesome/pro-regular-svg-icons";

export const Route = createFileRoute("/app/royalties-dashboard")({
  component: RoyaltiesDashboard,
});

const statCards = [
  {
    label: "GCI YTD",
    value: "$2.1M",
    ly: "GCI LY: $2.05M",
    pct: "+2.4%",
    tooltip: "Includes Sale and Lease",
  },
  {
    label: "Total GCI YTD",
    value: "$2.6M",
    ly: "Total GCI LY: $2.7M",
    pct: "−3.7%",
    tooltip: "Includes Sale, Lease, Auction, Property Management, and Other",
  },
  {
    label: "Listings YTD",
    value: "97",
    ly: "Listings LY: 214",
    pct: "−54.7%",
    tooltip: null,
  },
  {
    label: "Deals YTD",
    value: "80",
    ly: "Deals LY: 197",
    pct: "−59.4%",
    tooltip: null,
  },
  {
    label: "Advisors",
    value: "38",
    ly: null,
    pct: null,
    tooltip: null,
  },
];

const rows = [
  {
    id: "D 61 014-S > C 110 496",
    name: "Ann Test Deal (123 Test Deal St)",
    voucher: "115690",
    status: "overdue",
    closed: { line1: "Sold", line2: "05/15/2026" },
    commissionPaid: { line1: "Commission paid", line2: "05/19/2026" },
    royaltyFiled: { line1: "File by", line2: "06/02/2026", overdue: true },
    royaltyReceived: null,
    transactionValue: "$500,000.00",
    grossCommission: "$7,500.00",
    royalties: "$525.00",
    paidViaBuildout: null,
  },
  {
    id: "D 61 013-S > C 110 495",
    name: "Jane Leasing 12/20 (4455 Cot...)",
    voucher: "95238",
    status: "overdue",
    closed: { line1: "Sold", line2: "04/20/2026" },
    commissionPaid: { line1: "Commission paid", line2: "04/24/2026" },
    royaltyFiled: { line1: "File by", line2: "05/08/2026", overdue: true },
    royaltyReceived: null,
    transactionValue: "$10,000.00",
    grossCommission: "$1,000.00",
    royalties: "$70.00",
    paidViaBuildout: null,
  },
  {
    id: "D 61 013-S > C 110 494",
    name: "Jane Leasing 12/20 (4455 Cot...)",
    voucher: "95238",
    status: "overdue",
    closed: { line1: "Sold", line2: "04/20/2026" },
    commissionPaid: { line1: "Commission paid", line2: "04/24/2026" },
    royaltyFiled: { line1: "File by", line2: "05/08/2026", overdue: true },
    royaltyReceived: null,
    transactionValue: "$10,000.00",
    grossCommission: "$1,000.00",
    royalties: "$70.00",
    paidViaBuildout: null,
  },
  {
    id: "D 61 011-S > C 110 493",
    name: "4455 Cotesworth Ave",
    voucher: "95236",
    status: "overdue",
    closed: { line1: "Pending", line2: "Cancelled" },
    commissionPaid: { line1: "Commission paid", line2: "04/03/2026" },
    royaltyFiled: { line1: "File by", line2: "04/17/2026", overdue: true },
    royaltyReceived: null,
    transactionValue: "$1,300,000.00",
    grossCommission: "$1,000.00",
    royalties: "$2,065.00",
    paidViaBuildout: null,
  },
  {
    id: "D 61 012-T > C 110 492",
    name: null,
    voucher: null,
    status: "received",
    closed: { line1: "Closed", line2: "--" },
    commissionPaid: { line1: "Commission paid", line2: "04/01/2026" },
    royaltyFiled: { line1: "Filed on", line2: "04/01/2026", overdue: false },
    royaltyReceived: { line1: "Received on", line2: "04/01/2026" },
    transactionValue: "$1,000.00",
    grossCommission: "$1,000.00",
    royalties: "$70.00",
    paidViaBuildout: null,
  },
];

function TwoLineCell({
  line1,
  line2,
  overdue,
}: {
  line1: string;
  line2: string;
  overdue?: boolean;
}) {
  return (
    <div className={overdue ? "text-danger" : "text-muted"}>
      <div style={{ fontSize: 12 }}>{line1}</div>
      <div style={{ fontSize: 11, opacity: 0.75 }}>{line2}</div>
    </div>
  );
}

export default function RoyaltiesDashboard() {
  return (
    <Tooltip.Provider>
      <div>
        {/* Page header */}
        <div className="d-flex align-items-start justify-content-between px-4 py-3 border-bottom">
          <div>
            <h4 className="mb-1">Royalties</h4>
            <p className="text-muted small mb-0">
              Manage SVN royalties for your closed deals
            </p>
          </div>
          <a href="#" className="text-primary small d-flex align-items-center gap-1 mt-1">
            View Deals <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: 10 }} />
          </a>
        </div>

        {/* Stat cards */}
        <div className="d-flex gap-3 px-4 py-3 border-bottom">
          {statCards.map((card) => (
            <Card key={card.label} className="flex-fill">
              <Card.Body>
                <div className="d-flex align-items-center gap-1 mb-1 text-muted small fw-medium">
                  {card.label}
                  {card.tooltip && (
                    <Tooltip>
                      <Tooltip.Trigger
                        render={
                          <span
                            style={{ cursor: "default", lineHeight: 1 }}
                          />
                        }
                      >
                        <FontAwesomeIcon
                          icon={faCircleInfo}
                          style={{ fontSize: 12 }}
                        />
                      </Tooltip.Trigger>
                      <Tooltip.Content>{card.tooltip}</Tooltip.Content>
                    </Tooltip>
                  )}
                </div>
                <div className="fw-bold mb-1" style={{ fontSize: 28 }}>
                  {card.value}
                </div>
                {card.ly && (
                  <div className="text-muted" style={{ fontSize: 11 }}>
                    {card.ly}
                  </div>
                )}
                {card.pct && (
                  <div
                    className={`fw-semibold d-flex align-items-center gap-1 ${card.pct.startsWith("+") ? "text-success" : "text-danger"}`}
                    style={{ fontSize: 12 }}
                  >
                    <FontAwesomeIcon icon={card.pct.startsWith("+") ? faArrowTrendUp : faArrowTrendDown} />
                    {card.pct}
                  </div>
                )}
                {!card.ly && !card.pct && (
                  <>
                    <div style={{ fontSize: 11, visibility: "hidden" }}>—</div>
                    <div style={{ fontSize: 12, visibility: "hidden" }}>—</div>
                  </>
                )}
              </Card.Body>
            </Card>
          ))}
        </div>

        {/* Filters */}
        <div className="d-flex align-items-center gap-2 px-4 py-2 border-bottom">
          <div className="input-group input-group-sm" style={{ maxWidth: 220 }}>
            <span className="input-group-text bg-white border-end-0">
              <FontAwesomeIcon icon={faCircleInfo} className="text-muted" style={{ fontSize: 12 }} />
            </span>
            <input
              className="form-control form-control-sm border-start-0"
              placeholder="Search by ID, name, or amount"
            />
          </div>
          <button className="btn btn-outline-secondary btn-sm d-flex align-items-center gap-1">
            Status <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: 10 }} />
          </button>
          <button className="btn btn-outline-secondary btn-sm d-flex align-items-center gap-1">
            Deal Type <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: 10 }} />
          </button>
          <button className="btn btn-outline-secondary btn-sm d-flex align-items-center gap-1">
            Date Range <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: 10 }} />
          </button>
          <button className="btn btn-outline-secondary btn-sm d-flex align-items-center gap-1">
            Paid via Buildout <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: 10 }} />
          </button>
          <button className="btn btn-outline-secondary btn-sm d-flex align-items-center gap-1 ms-auto">
            Bulk Actions <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: 10 }} />
          </button>
        </div>

        {/* Table */}
        <Table responsive className="px-4">
          <Table.Header>
            <Table.Row>
              <Table.Head style={{ width: 32 }}>
                <input type="checkbox" />
              </Table.Head>
              <Table.Head>SVN ID</Table.Head>
              <Table.Head>SVN Deal Name</Table.Head>
              <Table.Head>Voucher</Table.Head>
              <Table.Head>Royalty Status</Table.Head>
              <Table.Head>Closed</Table.Head>
              <Table.Head>Commission Paid</Table.Head>
              <Table.Head>Royalty Filed</Table.Head>
              <Table.Head>Royalty Received</Table.Head>
              <Table.Head className="text-end">Transaction Value</Table.Head>
              <Table.Head className="text-end">Gross Commission</Table.Head>
              <Table.Head className="text-end">Royalties</Table.Head>
              <Table.Head>Paid via Buildout</Table.Head>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {/* Totals row */}
            <Table.Row className="fw-semibold bg-light">
              <Table.Cell />
              <Table.Cell colSpan={8}>TOTALS</Table.Cell>
              <Table.Cell className="text-end">$26,508,674.02</Table.Cell>
              <Table.Cell className="text-end">$976,510.10</Table.Cell>
              <Table.Cell className="text-end">$68,355.71</Table.Cell>
              <Table.Cell />
            </Table.Row>
            {rows.map((row) => (
              <Table.Row key={row.id}>
                <Table.Cell>
                  <input type="checkbox" />
                </Table.Cell>
                <Table.Cell>
                  <a href="#" className="text-primary">
                    {row.id}
                  </a>
                </Table.Cell>
                <Table.Cell>
                  {row.name ? (
                    <a href="#" className="text-primary">
                      {row.name}
                    </a>
                  ) : (
                    <span className="text-muted">--</span>
                  )}
                </Table.Cell>
                <Table.Cell>
                  {row.voucher ? (
                    <a href="#" className="text-primary">
                      {row.voucher}
                    </a>
                  ) : (
                    <span className="text-muted">--</span>
                  )}
                </Table.Cell>
                <Table.Cell>
                  <Badge
                    style={
                      row.status === "overdue"
                        ? { backgroundColor: "#dc3545", color: "#fff" }
                        : { backgroundColor: "#198754", color: "#fff" }
                    }
                  >
                    {row.status === "overdue" ? "Overdue" : "Received"}
                  </Badge>
                </Table.Cell>
                <Table.Cell>
                  <TwoLineCell {...row.closed} />
                </Table.Cell>
                <Table.Cell>
                  <TwoLineCell {...row.commissionPaid} />
                </Table.Cell>
                <Table.Cell>
                  <TwoLineCell {...row.royaltyFiled} />
                </Table.Cell>
                <Table.Cell>
                  {row.royaltyReceived ? (
                    <TwoLineCell {...row.royaltyReceived} />
                  ) : (
                    <span className="text-muted">--</span>
                  )}
                </Table.Cell>
                <Table.Cell className="text-end">
                  {row.transactionValue}
                </Table.Cell>
                <Table.Cell className="text-end">
                  {row.grossCommission}
                </Table.Cell>
                <Table.Cell className="text-end">{row.royalties}</Table.Cell>
                <Table.Cell>
                  <span className="text-muted">--</span>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </Tooltip.Provider>
  );
}
