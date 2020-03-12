export default () => `
<form id="register" method="POST" action="">
    <div>
      <label for="url">URL:</label>
      <input type="url" name="url" id="url" placeholder="Enter Your URL">
    </div>
    <div>
      <label for="title">title:</label>
      <input type="text" name="title" id="title">
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="email" name="email" id="email" placeholder="your@email.here">
    </div>
    <input type="submit" name="submit" value="Submit">
  </form>
  `;
