/* Public configuration only. NEVER place client secrets, tokens or session data here.
 *
 * ZENTRA-id — the verified identity service shared by the ZPG systems:
 *   identity service : https://id.zentrapropertygroup.com
 *   create account   : GET /daftar
 *   sign in          : GET /masuk
 *   request access   : GET /app/access   (per-system, per-role; an admin reviews)
 *   authorize        : GET /sso/authorize?client_id=<id>&redirect_uri=<uri>&state=<state>
 *   token exchange   : POST /sso/token   (server-side only — never in static files)
 *   family route     : /sso/login on each system (sets state cookie, then redirects)
 *
 * HONEST STATUS — sign-in is wired to the ZENTRA-id portal, not to a local route:
 *   - This host is a STATIC GitHub Pages site: it has no backend, so it cannot
 *     serve /sso/login or /sso/callback, and cannot perform the server-side
 *     code-to-identity exchange that requires the client secret.
 *   - No SSO client is registered for 'zentra-project' in the identity service.
 *     Registered clients today: zentra-asset, zentra-value, zentra-marketing.
 *   - 'Zentra Project' IS listed in the identity service's system register, so a
 *     signed-in user can request access to it from /app/access and an
 *     administrator reviews that request. That is the live access path today.
 *
 * loginUrl therefore points at the real ZENTRA-id sign-in. Once an SSO client is
 * registered and a backend is provisioned, switch loginUrl to the family route
 * '/sso/login' — no other change required.
 */
window.ZENTRA_CONFIG = Object.freeze({
  loginUrl: 'https://id.zentrapropertygroup.com/masuk',
  loginStatus: 'ready',
  requestAccessUrl: 'https://id.zentrapropertygroup.com/app/access',
  createAccountUrl: 'https://id.zentrapropertygroup.com/daftar',
  identityUrl: 'https://id.zentrapropertygroup.com',
  xmeUrl: 'https://xme.project.zentrapropertygroup.com',
  budimanUrl: 'https://budiman.project.zentrapropertygroup.com'
});
