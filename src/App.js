import React, { Component } from 'react';
import Sum_budget from './sum_budget';
import Stackchart from './stackchart';
import { Navbar } from 'react-bootstrap';
import Footer from './footer'
import './App.css'
import IncomeBudget from './income_budget'
class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="grad">
          <Navbar bg="light">
            <Navbar.Brand>Ministry of Tourism & Sports</Navbar.Brand>
          </Navbar>
          <br />
          <p className="text-box">
            กระทรวงการท่องเที่ยวและกีฬา เป็นหน่วยงานราชการไทยประเภทกระทรวง
            มีอำนาจหน้าที่เกี่ยวกับการส่งเสริมสนับสนุน
            และพัฒนาอุตสาหกรรมการท่องเที่ยว การกีฬา การศึกษาด้านกีฬา
            นันทนาการ และราชการอื่นตามที่กฎหมายกำหนด
            มีหน่วยงานในสังกัดทั้งหมด 4 หน่วยงานคือ
            <div className="text-list">
              <li>
                สำนักงานปลัดกระทรวงการท่องเที่ยวและกีฬา (Tourism and Sports){" "}
              </li>
              <li> กรมพลศึกษา (Sport and Recreation) </li>
              <li> กรมการท่องเที่ยว (Tourism development) </li>
              <li> สถาบันการพลศึกษา (Physical Education) </li>
            </div>
          </p>
          <hr />

          <div style={{ margin: "0 15% 0 15%" }}>
            <div>
              <p style={{ margin: "2%" }}>
                กราฟแสดงงบประมาณของกระทรวงการท่องเที่ยวและกีฬาตั้งแต่ปีพ.ศ.2550-2562
                (ล้านบาท)
              </p>
              <Sum_budget />

              <p style={{ margin: "2%" }}>
                กราฟเปรียบเทียบงบประมาณที่แต่ละหน่วยงานได้รับในแต่ละปีตั้งแต่พ.ศ.2550-2562
                (ล้านบาท)
              </p>
              <Stackchart />

              <p style={{ margin: "2%" }}>
                กราฟเปรียบเทียบค่าเฉลี่ยในช่วงปีพ.ศ.2550-2562
                ของงบประมาณที่แต่ละหน่วยงานได้รับ (ล้านบาท)
              </p>
              <IncomeBudget />
            </div>

            <div className="text-box">
              <p>Data source</p>
              <li className="text-list">
                <a href="http://dataservices.mof.go.th/Dataservices/GovernmentExpenditureEconomyMinistry">
                  ศูนย์ปฏิบัติการกระทรวงการคลัง
                </a>
              </li>
              <li className="text-list">
                <a href="http://www.bb.go.th/topic3.php?catID=1151&gid=862&mid=545">
                  สำนักงบประมาณ
                </a>
              </li>
              <li className="text-list">
                <a href="http://statbbi.nso.go.th/staticreport/page/sector/th/17.aspx?fbclid=IwAR3MHNO0N7isEmKQEnQ9dKtq0kZtufA4DQ0ykpVHXqR0mgkoqMhQNCVXoCE">
                  สำนักงานสถิติแห่งชาติ
                </a>
              </li>
              <li className="text-list">
                <a href="https://data.worldbank.org/indicator/NY.GDP.PCAP.CD?locations=TH">
                  ธนาคารโลก
                </a>
              </li>
            </div>
          </div>
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}
export default Main;