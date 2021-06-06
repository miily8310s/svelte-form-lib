<script>
  import { Navbar } from "./Navbar";

  const today = new Date();
  const oneYear = 1000 * 60 * 60 * 24 * 365;

  let start = new Date(Date.now() - oneYear);
  let end = new Date(Date.now() + oneYear);
  let month = today.getMonth();
  let year = today.getFullYear();

  let monthsOfYear = [
    ["January", "Jan"],
    ["February", "Feb"],
    ["March", "Mar"],
    ["April", "Apr"],
    ["May", "May"],
    ["June", "Jun"],
    ["July", "Jul"],
    ["August", "Aug"],
    ["September", "Sep"],
    ["October", "Oct"],
    ["November", "Nov"],
    ["December", "Dec"],
  ];
</script>

<Navbar {month} {year} {start} {end} {monthsOfYear} />
