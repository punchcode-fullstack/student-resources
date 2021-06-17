# Bash Commands: `netstat`, `ping`, `traceroute`
* netstat
* ping
* traceroute

### workshop (20 min)
* use traceroute to see the route from your laptop to google.com
    * how many hops are there?
    * are any of the hops slow? Do they have high latency?
* use netstat to see what services your laptop is listening on
    * are you running a webserver? (port 80/443)
    * are you running an smtp server (email)? (port 25)

* open chrome and visit google.com
* use netstat to view established ports
    * what are some of the ports used by chrome?
    * how many established connections did chrome get?

* use ping to determine if facebook.com is online and how much latency it has