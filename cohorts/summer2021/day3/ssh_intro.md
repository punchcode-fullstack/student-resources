# SSH: Introduction
SSH is implemented in 3 layers
* authentication: sends supported auth methods to the client and performs actual user authentication
* connection: handles opening, closing and management of channels after authentication
* transport: handles encryption, decryption, compression, caching, and data integrity

* SSH uses TCP port 22 by default

## The Problem
We need to send a message from our computer to another computer that no one else should be able to read.

### Solution 1
Create a code that both sides know and write the message encrypted with this code.

Then you can both decrypt messages sent in this code using the pre-known key.

But, what if you can't transmit the code without also telling everyone else at the same time?

Then everyone would still be able to read the messages because everyone has the code.

Since this is the situation we usually have, we need another way to transmit data securely.

### Diffie-Hellman key exchange

This article is well written and explains this better than I can:

https://www.comparitech.com/blog/information-security/diffie-hellman-key-exchange/

We will go through it together.
