export class FetchArticlesError extends Error {
  constructor(message) {
    super(message);
    this.name = 'FetchArticlesError';
  }
}

export class FetchUsersError extends Error {
  constructor(message) {
    super(message);
    this.name = 'FetchUsersError';
  }
}
