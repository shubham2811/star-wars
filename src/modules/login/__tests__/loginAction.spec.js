import { login } from "../actions/loginActionRoot";
import { LoginActionConstants } from "../../../common/actionConstants";

describe(" login actions", () => {
  it("should be able to call login action", () => {
    const userDetails = {
      username: "Luke Skywalker",
      password: "19BBY"
    };
    const expectedAction = {
      type: LoginActionConstants.LOGIN,
      ...userDetails
    };
    expect(login(userDetails)).toEqual(expectedAction);
  });
});
