/**
 * Class to handle some basics around Google drive and auth.
 */

// Dependencies
const google = require('googleapis').google;
require('dotenv').load({ silent: true });

class GoogleDrive {
  constructor(options = {}) {
    this.options = options;
    this.drive = google.drive('v3');
    this.scopes = [
      'https://www.googleapis.com/auth/drive',
      'https://www.googleapis.com/auth/drive.file'
    ];
  }

  // Authenticate.  Uses path to crednetials file from the
  // GOOGLE_APPLICATION_CREDENTIALS environmental variable
  async authenticate() {
    if (!process.env.GOOGLE_APPLICATION_CREDENTIALS) {
      throw new Error(
        'Requires the GOOGLE_APPLICATION_CREDENTIALS environment variable to be set to the path of a Google API credentials file.'
      );
    }

    return await google.auth.getClient({
      scopes: this.scopes
    });
  }

  // Share with someone.
  // role is probably going to be 'owner' or 'writer'
  // Transfer is used with owner to changer ownership of file
  async share(id, email, role = 'writer', transfer = false) {
    if (!id) {
      throw new Error('File id not provided to addOwner method');
    }
    if (!email) {
      throw new Error('Email not provided to addOwner method');
    }

    let auth = await this.authenticate();
    return await this.drive.permissions.create({
      auth: auth,
      resource: {
        role: role,
        type: 'user',
        emailAddress: email
      },
      fileId: id,
      transferOwnership: transfer
    });
  }

  // Wrapper to make owner
  async owner(id, email) {
    return await this.share(id, email, 'owner', true);
  }
}

// Export
module.exports = GoogleDrive;
