/* 
    The token bucket algorithm is a rate limiting mechanism that provides a fixed number
    of tokens to limit requests. Each new request will consume a token and when the bucket is empty.
    The system has to refill it, thus no new requests can occur when the bucket is empty.

    Tokens are added to the bucket one at a time, at a steady rate.
    These new tokens will be added as long as the token total is less than the burst limit.
    The rate limit and the burst limit are parameters of the algorithm.
*/
