import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'recipe'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.date('content')
      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.comment('Manages the app users')
      table.unique(['slug', 'tenant_id'])
      table.foreign('user_id').references('users.id').onDelete('CASCADE')
      table.foreign('user_id').references('users.id').onDelete('CASCADE')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
