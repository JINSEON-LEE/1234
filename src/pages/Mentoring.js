import withRoot from "../withRoot";
import React, { useState, useEffect } from "react";
import { API, Storage, Amplify, Auth, graphqlOperation } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import AWSAppSyncClient, { AUTH_TYPE } from "aws-appsync";
import awsconfig from "../aws-exports";

import Typography from "../components/Typography";
import {
  Grid,
  Button,
  Box,
  ListItem,
  Divider,
  Container,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import AppAppBar from "../views/AppAppBar";
import AppFooter from "../views/AppFooter";
import SignIn from "./SignIn";
import Chatting from "./Chatting";

Amplify.configure(awsconfig);

const client = new AWSAppSyncClient({
  url: awsconfig.aws_appsync_graphqlEndpoint,
  region: awsconfig.aws_appsync_region,
  auth: {
    type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
    jwtToken: async () =>
      (await Auth.currentSession()).getIdToken().getJwtToken(),
  },
  disableOffline: true,
});

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary,
    alignItems: "center",
    position: "relative",
  },
  form: {
    marginTop: theme.spacing(6),
  },
  number: {
    fontSize: 30,
    color: theme.palette.secondary.light,
    marginLeft: theme.spacing(2),
  },
  content: {
    fontSize: 24,
    marginLeft: theme.spacing(1),
  },
  inputbox: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(2),
  },
  popbox: {
    fontSize: 14,
    backgroundColor: "#F3F3F3",
    padding: theme.spacing(2),
  },
  searchbar: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 742,
    marginTop: theme.spacing(5),
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  inputbox: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(2),
  },
  plusbutton: {
    marginBottom: theme.spacing(1.6),
  },
  iconButton: {
    padding: 10,
  },
  method: {
    textAlign: "center",
  },
  red: {
    color: "red",
    fontSize: 15,
  },
  table: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    width: "90%",
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const Mentoring = () => {
  const classes = useStyles();

  const [authState, setAuthState] = useState();
  const [user, setUser] = useState();
  const [orders, setOrders] = useState([]);
  const [selectedOrderIndex, setSelectedOrderIndex] = useState(0);
  const [selectedProblemIndex, setSelectedProblemIndex] = useState(0);
  const [viewSol, setViewSol] = useState(false);
  const [viewRefSol, setViewRefSol] = useState(false);

  React.useLayoutEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(
        (data) => console.log(data) & setUser(data) & setAuthState("signedin")
      )
      .catch((err) => console.log(err));
    onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

  React.useLayoutEffect(() => {
    fetchOrders();
  }, [authState]);

  const handleListItemClick = (event, index) => {
    let lastSelectedOrderIndex = selectedOrderIndex;
    console.log("현재 click한 index", index);
    setSelectedOrderIndex(index);
    setSelectedProblemIndex(0);
    setViewSol(false);
  };

  const handleViewRefSol = () => {
    setViewRefSol(!viewRefSol);
  };

  const handleViewSol = () => {
    setViewSol(!viewSol);
  };

  async function nowAuth() {
    const nowAuth = await Auth.currentUserInfo();
    const username = nowAuth.username;
    return username;
  }

  async function fetchOrders() {
    console.log("fetch assigned orders");
    const username = await nowAuth().catch((err) => console.log(err));
    console.log("username", username);

    const OrderWithMentoring = `query MyQuery($eq: String = "${username}", $eq1: State = ${"mentoring"}) {
      listOrders(filter: {solver: {eq: $eq}, state: {eq: $eq1}}) {
        items {
          problems {
            items {
              description
              id
              image
              subject
            }
          }
          id
          deadline
          username
        }
      }
    }
    `;
    const apiData = await API.graphql({
      query: OrderWithMentoring,
      variables: { filter: { solver: { eq: username } } },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    console.log("apiData", apiData);
    // const apiData = await API.graphql(graphqlOperation(FetchAssignedOrders));
    const ordersFromAPI = apiData.data.listOrders.items;
    console.log("state가 mentoring인 order: ", ordersFromAPI);
    setOrders(ordersFromAPI);
    return ordersFromAPI;
  }

  function getLastProblem() {
    setSelectedProblemIndex(selectedProblemIndex - 1);
  }

  function getNextProblem() {
    setSelectedProblemIndex(selectedProblemIndex + 1);
  }

  if (!orders.length)
    return (
      <div>
        <AppAppBar isLogin={authState} />
        <div>There isn't mentoring request.</div>
        <AppFooter />
      </div>
    );
  return authState === AuthState.SignedIn && user ? (
    <div className="Solve">
      <React.Fragment>
        <AppAppBar isLogin={authState} />
        <div>{orders[0].subject}</div>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
        >
          <Grid>
            <React.Fragment>
              <div>멘토링 목록 </div>
              <Box
                border={0}
                style={{ margin: "0em 0em 0em 0em", padding: "0em 0em" }}
              >
                <Table
                  border="1px solid gray"
                  align="center"
                  className={classes.table}
                  aria-label="simple table"
                >
                  <TableHead>
                    <TableRow>
                      <StyledTableCell align="center">번호</StyledTableCell>
                      <StyledTableCell align="center">마감시간</StyledTableCell>
                      <StyledTableCell align="center">문제수</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {orders.map((order, index) => (
                      <TableRow key={order.deadline}>
                        <StyledTableCell
                          align="center"
                          component="th"
                          scope="row"
                        >
                          <ListItem
                            button
                            selected={selectedOrderIndex === index}
                            onClick={(event) =>
                              handleListItemClick(event, index)
                            }
                          >
                            {index + 1}
                          </ListItem>
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          <ListItem
                            button
                            selected={selectedOrderIndex === index}
                            onClick={(event) =>
                              handleListItemClick(event, index)
                            }
                          >
                            {order.deadline}
                          </ListItem>
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          <ListItem
                            button
                            selected={selectedOrderIndex === index}
                            onClick={(event) =>
                              handleListItemClick(event, index)
                            }
                          >
                            {order.problems.items.length}
                          </ListItem>
                        </StyledTableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </React.Fragment>
            <React.Fragment>
              <Box
                border={1}
                style={{ margin: "1em 1em 1em", padding: "1em 2em" }}
              >
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                (치팅시트 들어올 자리)
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <button onClick={handleViewRefSol}>
                  {viewRefSol === true ? (
                    <span>문제보기</span>
                  ) : (
                    <span>풀이보기</span>
                  )}
                </button>
              </Box>
            </React.Fragment>
            <React.Fragment>
              <Box
                border={1}
                style={{
                  maxHeight: "120",
                  margin: "1em 1em 1em",
                  padding: "1em 2em",
                }}
              >
                <Typography variant="body1" align="center">
                  <br />
                  <br />
                  멘토 재배정 요청 : 사유
                  <br />
                  <br />
                </Typography>
              </Box>
            </React.Fragment>
          </Grid>
          <Grid item xs={6}>
            <Box
              border={1}
              style={{
                minHeight: "60",
                maxHeight: "120",
                margin: "1em 1em 1em",
                padding: "1em 2em",
              }}
            >
              <div>문제랑 답 같이 올 자리</div>
            </Box>
            <React.Fragment>
              <Box
                border={1}
                style={{
                  maxHeight: "120",
                  margin: "1em 1em 1em",
                  padding: "1em 2em",
                }}
              >
                <Typography variant="h4" align="center">
                  <Button
                    disabled={
                      !orders[selectedOrderIndex].problems.items[
                        selectedProblemIndex - 1
                      ]
                    }
                    variant="outlined"
                    color="black"
                    onClick={getLastProblem}
                  >
                    이전문제
                  </Button>
                  남은시간 02:13 ____ {selectedProblemIndex + 1}/
                  {orders[selectedOrderIndex].problems.items.length}
                  <Button
                    disabled={
                      !orders[selectedOrderIndex].problems.items[
                        selectedProblemIndex + 1
                      ]
                    }
                    variant="outlined"
                    color="black"
                    onClick={getNextProblem}
                  >
                    다음문제
                  </Button>
                  <Grid direction="column" alignItems="center"></Grid>
                </Typography>
              </Box>
            </React.Fragment>
          </Grid>
          <Grid item xs={3}>
            <React.Fragment>
              <Box
                border={1}
                style={{
                  maxHeight: "120",
                  margin: "1em 1em 1em",
                  padding: "0em 2em",
                }}
              >
                <Chatting
                  solver={user.username}
                  client={orders[selectedOrderIndex].username}
                  channelID={orders[selectedOrderIndex].id}
                />
                {user.username}, {orders[selectedOrderIndex].username},{" "}
                {orders[selectedOrderIndex].id}
              </Box>
            </React.Fragment>
            <React.Fragment>
              <Box
                border={1}
                style={{
                  maxHeight: "120",
                  margin: "1em 1em 1em",
                  padding: "1em 2em",
                }}
              >
                <br />
                <br />
                <br />
              </Box>
            </React.Fragment>
          </Grid>
        </Grid>
        <AppFooter />
      </React.Fragment>
    </div>
  ) : (
    <SignIn />
  );
};
export default withRoot(withAuthenticator(Mentoring));
