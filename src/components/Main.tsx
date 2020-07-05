import React from 'react';
import {
  Breadcrumb,
  Button,
  Card,
  Carousel,
  Checkbox,
  Chip,
  Col,
  Collapsible,
  CollapsibleItem,
  Collection,
  CollectionItem,
  DatePicker,
  Divider,
  Dropdown,
  Icon,
  Modal,
  Pagination,
  Parallax,
  Preloader,
  ProgressBar,
  RadioGroup,
  Range,
  Row,
  Select,
  SideNav,
  SideNavItem,
  Switch,
  Tab,
  Table,
  Tabs,
  Textarea,
  TextInput,
} from 'react-materialize';

const Main: React.FunctionComponent = () => {
  return (
    <>
      <Breadcrumb className="teal" cols={12}>
        <a href="#">One</a>
        <a href="#">Two</a>
        <a href="#">Three</a>
      </Breadcrumb>

      <Carousel
        carouselId="Carousel-2"
        images={[
          'https://picsum.photos/200/300?image=0',
          'https://picsum.photos/200/300?image=1',
          'https://picsum.photos/200/300?image=2',
          'https://picsum.photos/200/300?image=3',
          'https://picsum.photos/200/300?image=4',
        ]}
        options={{
          dist: -100,
          duration: 200,
          fullWidth: false,
          indicators: false,
          noWrap: false,
          numVisible: 5,
          onCycleTo: null,
          padding: 0,
          shift: 0,
        }}
      />
      <Carousel
        carouselId="Carousel-2"
        images={[
          'https://picsum.photos/250/250?image=0',
          'https://picsum.photos/250/250?image=1',
          'https://picsum.photos/250/250?image=2',
          'https://picsum.photos/250/250?image=3',
          'https://picsum.photos/250/250?image=4',
        ]}
        options={{
          fullWidth: true,
          indicators: true,
        }}
      />

      <Collapsible accordion>
        <CollapsibleItem
          expanded={false}
          header="Better safe than sorry. That's my motto."
          icon={<Icon>filter_drama</Icon>}
          node="div"
          onSelect={() => {}}
        >
          Better safe than sorry. That's my motto.
        </CollapsibleItem>
        <CollapsibleItem
          expanded={false}
          header="Yeah, you do seem to have a little 'shit creek' action going."
          icon={<Icon>place</Icon>}
          node="div"
          onSelect={() => {}}
        >
          Yeah, you do seem to have a little 'shit creek' action going.
        </CollapsibleItem>
        <CollapsibleItem
          expanded={false}
          header="You know, FYI, you can buy a paddle. Did you not plan for this contingency?"
          icon={<Icon>whatshot</Icon>}
          node="div"
          onSelect={() => {}}
        >
          You know, FYI, you can buy a paddle. Did you not plan for this
          contingency?
        </CollapsibleItem>
      </Collapsible>

      <Dropdown
        id="Dropdown_6"
        options={{
          alignment: 'left',
          autoTrigger: true,
          closeOnClick: true,
          constrainWidth: true,
          container: null,
          coverTrigger: true,
          hover: false,
          inDuration: 150,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 250,
        }}
        trigger={<Button node="button">Drop Me!</Button>}
      >
        <a href="#">one</a>
        <a href="#">two</a>
        <Divider />
        <a href="#">three</a>
        <a href="#">
          <Icon>view_module</Icon>
          four
        </a>
        <a href="#">
          <Icon>cloud</Icon> five
        </a>
      </Dropdown>

      <Modal
        actions={[
          <Button flat modal="close" node="button" waves="green">
            Close
          </Button>,
        ]}
        bottomSheet={false}
        fixedFooter={false}
        header="Modal Header"
        id="Modal-0"
        open={false}
        options={{
          dismissible: true,
          endingTop: '10%',
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          opacity: 0.5,
          outDuration: 250,
          preventScrolling: true,
          startingTop: '4%',
        }}
        // root={[object HTMLBodyElement]}
        trigger={<Button node="button">MODAL</Button>}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
      </Modal>

      <div>
        <Parallax
          image={
            <img alt="" src="http://materializecss.com/images/parallax1.jpg" />
          }
          options={{
            responsiveThreshold: 0,
          }}
        />
        <div className="section white">
          <div className="row container">
            <h2 className="header">Parallax</h2>
            <p className="grey-text text-darken-3 lighten-3">
              Parallax is an effect where the background content or image in
              this case, is moved at a different speed than the foreground
              content while scrolling.
            </p>
          </div>
        </div>
        <Parallax
          image={
            <img alt="" src="http://materializecss.com/images/parallax2.jpg" />
          }
          options={{
            responsiveThreshold: 0,
          }}
        />
      </div>

      <div>
        <style>
          {`
            #root > div > div {
              z-index: 99999 !important;
            }
          `}
        </style>
        <SideNav
          id="SideNav-10"
          options={{
            draggable: true,
          }}
          trigger={<Button node="button">SIDE NAV DEMO</Button>}
        >
          <SideNavItem
            user={{
              background: 'https://placeimg.com/640/480/tech',
              email: 'jdandturk@gmail.com',
              image: 'static/media/react-materialize-logo.824c6ea3.svg',
              name: 'John Doe',
            }}
            userView
          />
          <SideNavItem href="#!icon" icon={<Icon>cloud</Icon>}>
            First Link With Icon
          </SideNavItem>
          <SideNavItem href="#!second">Second Link</SideNavItem>
          <SideNavItem divider />
          <SideNavItem subheader>Subheader</SideNavItem>
          <SideNavItem href="#!third" waves>
            Third Link With Waves
          </SideNavItem>
        </SideNav>
      </div>

      <Tabs className="tab-demo z-depth-1">
        {['Test 1', 'Test 2', 'Test 3', 'Test 4'].map((v, i) => (
          <Tab
            key={i}
            // @ts-ignore
            options={{
              duration: 300,
              onShow: null,
              responsiveThreshold: Infinity,
              swipeable: false,
            }}
            title={v}
          >
            {v}
          </Tab>
        ))}
      </Tabs>

      <div>
        <Button
          node="button"
          // style={{
          //   marginRight: '5px',
          // }}
          waves="light"
        >
          button
        </Button>
      </div>

      <Row>
        <Col m={6} s={12}>
          <Card
            actions={[
              <a key="1" href="#">
                This is a link
              </a>,
              <a key="2" href="#">
                This is a link
              </a>,
            ]}
            className="blue-grey darken-1"
            closeIcon={<Icon>close</Icon>}
            revealIcon={<Icon>more_vert</Icon>}
            textClassName="white-text"
            title="Card title"
          >
            I am a very simple card.
          </Card>
        </Col>
      </Row>

      <Checkbox id="Checkbox_3" label="Red" value="Red" />
      <Checkbox checked id="Checkbox_3" label="Red" value="Red" />
      <Chip
        close={false}
        closeIcon={<Icon className="close">close</Icon>}
        options={null}
      >
        Jane Doe
      </Chip>

      <Row>
        <Col m={6} s={12}>
          <Collection>
            <CollectionItem href="">Alvin</CollectionItem>
            <CollectionItem href="">Alvin</CollectionItem>
            <CollectionItem href="">Alvin</CollectionItem>
            <CollectionItem href="">Alvin</CollectionItem>
          </Collection>
        </Col>
      </Row>

      <DatePicker
        id="DatePicker-5"
        options={{
          autoClose: false,
          container: null,
          defaultDate: null,
          disableDayFn: null,
          disableWeekends: false,
          events: [],
          firstDay: 0,
          format: 'mmm dd, yyyy',
          i18n: {
            cancel: 'Cancel',
            clear: 'Clear',
            done: 'Ok',
            months: [
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
              'August',
              'September',
              'October',
              'November',
              'December',
            ],
            monthsShort: [
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec',
            ],
            nextMonth: '›',
            previousMonth: '‹',
            weekdays: [
              'Sunday',
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
            ],
            weekdaysAbbrev: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
            weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          },
          isRTL: false,
          maxDate: null,
          minDate: null,
          onClose: null,
          onDraw: null,
          onOpen: null,
          onSelect: null,
          parse: null,
          setDefaultDate: false,
          showClearBtn: false,
          showDaysInNextAndPreviousMonths: false,
          showMonthAfterYear: false,
          yearRange: 10,
        }}
      />

      <Pagination
        activePage={1}
        items={10}
        leftBtn={<Icon>chevron_left</Icon>}
        // maxButtons={8}
        rightBtn={<Icon>chevron_right</Icon>}
      />

      <Row>
        <Col s={12}>
          <ProgressBar progress={70} />
        </Col>
        <Col s={12}>
          <ProgressBar />
        </Col>
      </Row>
      <Row>
        <Col s={4}>
          <Preloader active color="blue" flashing={false} size="big" />
        </Col>
        <Col s={4}>
          <Preloader active color="blue" flashing />
        </Col>
        <Col s={4}>
          <Preloader active color="blue" flashing={false} size="small" />
        </Col>
      </Row>

      <RadioGroup
        label="T-Shirt Size"
        name="size"
        options={[
          {
            label: 'XL',
            value: 'xl',
          },
          {
            label: 'L',
            value: 'l',
          },
          {
            label: 'M',
            value: 'm',
          },
        ]}
        value="xl"
        withGap
      />

      <Range
        max="100"
        min="0"
        // name="points"
        // step="0.5"
      />

      <Select
        id="Select-9"
        multiple={false}
        onChange={function noRefCheck() {}}
        options={{
          classes: '',
          dropdownOptions: {
            alignment: 'left',
            autoTrigger: true,
            closeOnClick: true,
            constrainWidth: true,
            coverTrigger: true,
            hover: false,
            inDuration: 150,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 250,
          },
        }}
        value=""
      >
        <option disabled value="">
          Choose your option
        </option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Select>

      <Switch
        id="Switch-11"
        offLabel="Off"
        onChange={function noRefCheck() {}}
        onLabel="On"
      />

      <TextInput id="TextInput-4" />

      <Row>
        <Textarea id="Textarea-12" l={12} m={12} s={12} xl={12} />
      </Row>

      <Table>
        <thead>
          <tr>
            <th data-field="id">Name</th>
            <th data-field="name">Item Name</th>
            <th data-field="price">Item Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alvin</td>
            <td>Eclair</td>
            <td>$0.87</td>
          </tr>
          <tr>
            <td>Alan</td>
            <td>Jellybean</td>
            <td>$3.76</td>
          </tr>
          <tr>
            <td>Jonathan</td>
            <td>Lollipop</td>
            <td>$7.00</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default Main;
