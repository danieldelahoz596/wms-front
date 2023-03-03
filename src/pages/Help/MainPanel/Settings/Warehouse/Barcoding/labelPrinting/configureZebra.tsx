import { Card, Col, Row } from 'antd';

export default function () {
  return (
    <>
      <h2>
        Settings {'>'} Warehouse {'>'} How to Configure Zebra WiFi Printer
      </h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>How to Configure Zebra WiFi Printer</h1>
            <br />
            <p>The following article outlines how to set up your Zebra WiFi enabled printer such as a GX420t or QLN420 plus.</p>
            <ol>
              <li>
                Before getting started: Download and install{' '}
                <a href="https://www.zebra.com/gb/en/products/software/barcode-printers/zebralink/zebra-setup-utility.html">
                  Zebra Setup utilities
                </a>
                from the web or the CD that came with your printer. The Zebra setup utilities program is used to configure
                settings on the printer via USB.
              </li>
              <li>
                Plug the printer into your PC via the provided USB cable. Your Windows PC should automatically start installing
                the printer. You should see your printer in the printers window in Zebra Setup Utilities
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671287125457-1%2Bwifiprinter1.png" />
              </li>
              <li>
                Next, highlight the printer in the upper window, and press the <b>'Configure Printer Connectivity'</b> button
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671287159262-2%2Bconfigurepc.png" />
              </li>
              <li>
                Select '<b>Wireless</b>' from the <b>Connectivity Type</b> window
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671287193854-3%2Bcon1.png" />
              </li>
              <li>
                Next, you will be prompted to select either <b>DHCP</b> or <b>Static</b> IP address.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671287208943-4%2Bdhcp.png" />
                <ul>
                  <li>
                    <b>DHCP</b> - This means an IP address will automatically be assigned by your network to the device
                  </li>
                  <li>
                    <b>Static</b> - Select this option if you want to assign a specific IP address to the printer. You will also
                    need your
                    <b>Subnet Mask</b> and <b>Default Gateway</b> information.
                  </li>
                </ul>
                <p>
                  Hostname and the Client ID settings can typically be left blank. Click Next when you've made your selection.
                </p>
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671287238326-5%2Bnetwork.png" />
              </li>
              <li>
                Now you will enter in your <b>ESSID</b> and <b>Security Mode</b>. The ESSID is the WiFi network name that is
                broadcast, much like when picking a WiFi network from your smartphone.
                <ol>
                  <li>
                    The <b>ESSID</b> must be typed exactly, including caps and special characters
                  </li>
                  <li>
                    <b>Security Mode</b> - The most common security mode is <b>WPA-PSK/WPA2-PSK.</b> Speak to your network admin
                    if you are unsure about this setting.
                  </li>
                </ol>
              </li>
              <li>
                Select <b>String</b> and enter your <b>PSK name</b> (WiFi Password) Make sure the <b>password</b> is entered
                exactly <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671287316365-6%2Bwifipw.png" />
              </li>
              <li>
                Now click <b>Next</b> until the <b>Next</b> button is grayed out. Make sure the 'Printer' selection is active and
                click Finish. This will send the configuration to your printer.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671287341439-7%2Bfinishwifi.png" />
              </li>
              <li>
                Now, when you look at the printer you should see an IP address <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671287356922-8%2Bip.jpg" />
              </li>
            </ol>
            <p>
              If you are still not getting an IP address after completing these steps, review your network configuration and
              repeat the above steps. You may need to speak to your network administrator to get the correct configuration
              settings for your specific network.
            </p>
          </Card>
        </Col>
      </Row>
    </>
  );
}
